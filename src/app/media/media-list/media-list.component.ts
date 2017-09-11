import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from "rxjs/Subject";

import { ListService } from "../../shared/list/list.service";
import { MediaService } from "../media.service";
import { Media } from "../media.model";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit, OnDestroy {
  media: Media[] = [];
  isMediaListLoading: boolean = true;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private mediaService: MediaService, private listService: ListService) { }

  ngOnInit() {
    if (this.mediaService.getMedia()) {
      this.media = this.mediaService.getMedia();
      this.isMediaListLoading = false;
    } else {
      this.mediaService.fetchMedia();
    }

    this.mediaService.mediaChanged
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (media: Media[]) => {
          this.isMediaListLoading = false;
          this.media = media;
        }
      )

    this.listService.clickedDeleteButton
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (id: string) => this.mediaService.deleteMedia(id)
      )
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
