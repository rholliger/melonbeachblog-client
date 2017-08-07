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

  onUpload(event: any) {
    this.files = event.target.files;
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
    // this.name = this.file.name;
  }

  onRemoveFile(index: number) {
    // this.files = this.files.splice(index, 1);
    const blabla = Array.from(this.files);
    blabla.splice(index, 1);
    this.files = blabla;
    console.log('on remove file', blabla);
  }

  onSubmit(form: NgForm) {
    console.log(this.files);

    this.mediaService.uploadMedia(this.files).subscribe(
      () => this.router.navigate(['../'], { relativeTo: this.route })
    );
  }

}
