import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Media } from "../../../media/media.model";

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {
  @Input() media: Media;
  @Output() elementSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickOnMediaItem(event: any) {
    this.elementSelected.emit({
      element: event.target.parentNode,
      value: this.media
    });
  }

}
