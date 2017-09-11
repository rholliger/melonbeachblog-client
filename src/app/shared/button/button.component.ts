import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { Subject } from "rxjs/Subject";

import { MediaService } from "../../media/media.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() type: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';

  @Output() uploadStarted: EventEmitter<any> = new EventEmitter();
  @Output() uploadDone: EventEmitter<any> = new EventEmitter();

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  onUpload(event: any) {
    this.uploadStarted.emit();

    this.mediaService.uploadMedia(event.target.files)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (media: any) => {
          this.mediaService.addMedia(media);
          this.uploadDone.emit(media);
        }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}