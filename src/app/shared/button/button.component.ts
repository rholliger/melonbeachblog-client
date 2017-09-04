import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { MediaService } from "../../media/media.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';

  @Output() uploadStarted: EventEmitter<any> = new EventEmitter();
  @Output() uploadDone: EventEmitter<any> = new EventEmitter();

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  onUpload(event: any) {
    console.log('uploaded', event.target.files);
    this.uploadStarted.emit();

    this.mediaService.uploadMedia(event.target.files).subscribe(
      (media: any) => {
        this.mediaService.addMedia(media);
        this.uploadDone.emit(media);
      }
    );
  }

}