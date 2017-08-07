import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss']
})
export class MediaUploadComponent implements OnInit {
  file: any;
  name: string = 'or drop the files here';
  isDraggedOver: boolean = false;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpload(event: any) {
    this.file = event.target.files[0];
    this.name = this.file.name;
    console.log('upload file', this.file.name);
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

    this.file = event.dataTransfer.files[0];
    this.name = this.file.name;
  }

  onSubmit(form: NgForm) {
    console.log('clicked submit with file', this.file.fileName);

    const formData = new FormData();

    formData.append('mediaUpload', this.file);

    this.http.post('http://localhost:3000/api/media', formData).subscribe(
      () => this.router.navigate(['../'], { relativeTo: this.route })
    )
  }

}
