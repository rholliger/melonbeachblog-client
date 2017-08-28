import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";

import { MediaService } from "../media.service";

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss']
})
export class MediaUploadComponent implements OnInit {
  files: any[];
  name: string = 'or drop the files here';
  isDraggedOver: boolean = false;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService) { }

  ngOnInit() {
  }

  onUploadDone(event: any) {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.isDraggedOver = true;
  }

  onDragLeave(event: any) {
    event.preventDefault();

    this.isDraggedOver = false;
  }

  onDrop(event: any) {
    event.preventDefault();
    this.isDraggedOver = false;
    
    this.files = event.dataTransfer.files;
  }

  onRemoveFile(index: number) {
    const toUploadedFiles = Array.from(this.files);
    toUploadedFiles.splice(index, 1);
    this.files = toUploadedFiles;
  }

  onSubmit(form: NgForm) {
    this.mediaService.uploadMedia(this.files).subscribe(
      () => this.router.navigate(['../'], { relativeTo: this.route })
    );
  }

}
