import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showArticleLinkArrow = false;
  showMediaLinkArrow = false;

  @ViewChild('articlesLink') articlesLink;
  @ViewChild('mediaLink') mediaLink;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.articlesLink.nativeElement.classList.contains('active')) {
      this.showArticleLinkArrow = true;
    } else {
      this.showArticleLinkArrow = false;
    }

    if (this.mediaLink.nativeElement.classList.contains('active')) {
      this.showMediaLinkArrow = true;
    } else {
      this.showMediaLinkArrow = false;
    }
  }

}
