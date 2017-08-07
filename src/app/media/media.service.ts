import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Media } from "./media.model";
import { Subject } from "rxjs/Subject";
import { environment as config } from '../../environments/environment';

@Injectable()
export class MediaService {
    constructor(private http: Http) {}

    mediaChanged = new Subject<Media[]>();

    private media: Media[] = [];

    removeMedia(mediaId: string) {
        const index = this.media.findIndex((el) => el._id === mediaId);
        this.media.splice(index, 1);
        this.mediaChanged.next(this.media.slice());
    }

    fetchMedia() {
        this.http.get(config.apiUrl + '/media').subscribe(
            (response: Response) => {
                const media = response.json();
                this.media = media;
                this.mediaChanged.next(this.media.slice());
            }
        )
    }

    deleteMedia(mediaId: string) {
        this.http.delete(config.apiUrl + '/media/' + mediaId).subscribe(
            (response: Response) => this.removeMedia(mediaId)
        )
    }

    // FetchMedia
    // fetchArticle(articleId: string) {
    //     return this.http.get(config.apiUrl + '/articles/' + articleId);
    // }

}