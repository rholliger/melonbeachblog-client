import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

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
  clickedDeleteSubscription: Subscription;

  constructor(private mediaService: MediaService, private listService: ListService) { }

  ngOnInit() {
    this.mediaService.fetchMedia();

    this.mediaService.mediaChanged.subscribe(
      (media: Media[]) => this.media = media
    )

    this.clickedDeleteSubscription = this.listService.clickedDeleteButton.subscribe(
      (id: string) => this.mediaService.deleteMedia(id)
    )
  }

  ngOnDestroy() {
    this.clickedDeleteSubscription.unsubscribe();
  }
}
