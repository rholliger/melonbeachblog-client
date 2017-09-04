import { Injectable } from "@angular/core";

import { Subject } from "rxjs/Subject";
import { environment as config } from '../../environments/environment';

import { Media } from "./media.model";
import { HttpClient } from "../shared/http-client.service";

@Injectable()
export class MediaService {
    constructor(private httpClient: HttpClient) {}

    mediaChanged = new Subject<Media[]>();
    private media: Media[];
    private entity: string = 'media';

    setMedia(media: Media[]) {
        this.media = media;
    }

    getMedia() {
        if (this.media) return this.media.slice();
    }

    addMedia(media: Media) {
        this.media.unshift(media);
        this.mediaChanged.next(this.media.slice());
    }

    removeMedia(mediaId: string) {
        const index = this.media.findIndex((el) => el._id === mediaId);
        this.media.splice(index, 1);
        this.mediaChanged.next(this.media.slice());
    }

    /* -- API Methods -- */

    fetchMedia() {
        this.httpClient.get(`/${this.entity}`).subscribe(
            (media: any) => {
                this.media = media;
                this.mediaChanged.next(this.media.slice());
            }
        );
    }

    deleteMedia(mediaId: string) {
        this.httpClient.delete(`/${this.entity}/${mediaId}`).subscribe(
            (media: any) => this.removeMedia(mediaId)
        );
    }

    uploadMedia(files: any[]) {
        const formData = new FormData();

        for(let i = 0; i < files.length; i++) {
            formData.append('mediaUpload', files[i]);
        }

        return this.httpClient.post(`/${this.entity}`, formData);
    }
}