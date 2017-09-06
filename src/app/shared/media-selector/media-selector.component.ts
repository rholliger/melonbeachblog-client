import { Component, OnInit, Renderer2, QueryList, ViewChildren, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Media } from "../../media/media.model";
import { MediaService } from "../../media/media.service";
import { MediaItemComponent } from "./media-item/media-item.component";

@Component({
  selector: 'app-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss']
})
export class MediaSelectorComponent implements OnInit {
  mediaList: Media[] = [];
  selectedElement: Media;
  showAppButton: boolean = false;
  overflowStyle: string = 'auto';

  @Output() clickedConfirm: EventEmitter<any> = new EventEmitter();
  @Output() clickedCancel: EventEmitter<any> = new EventEmitter();
  @ViewChildren(MediaItemComponent, { read: ElementRef }) mediaItems: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper;

  constructor(private mediaService: MediaService, private renderer: Renderer2) { }

  ngOnInit() {
    this.mediaService.fetchMedia();

    this.mediaService.mediaChanged.subscribe(
      (mediaList: Media[]) => {
        this.mediaList = mediaList;
      }
    );

    this.toggleScroll();
  }

  ngAfterViewInit() {
    this.wrapper.nativeElement.focus();
  }

  onElementSelected(selectedElement: any) {
    this.mediaItems.forEach(item => {
      this.renderer.removeClass(item.nativeElement.querySelector('li'), 'active');
    });
    
    this.renderer.addClass(selectedElement.element, 'active');
    this.showAppButton = true;
    this.selectedElement = selectedElement.value;
  }

  onClickOnConfirm() {
    this.toggleScroll();
    this.clickedConfirm.emit(this.selectedElement);
  }

  onRemoveModal(event: any) {
    this.toggleScroll();
    this.clickedCancel.emit();
  }

  toggleScroll() {
    this.overflowStyle === 'auto' ? this.overflowStyle = 'hidden' : this.overflowStyle = 'auto';
    this.renderer.setStyle(document.body, 'overflow', this.overflowStyle);
  }

}