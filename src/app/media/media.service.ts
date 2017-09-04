import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Media } from "./media.model";
import { Subject } from "rxjs/Subject";
import { environment as config } from '../../environments/environment';
import { SharedService } from "../shared/shared.service";

@Injectable()
export class MediaService {
    constructor(private http: Http, private sharedService: SharedService) {}

    mediaChanged = new Subject<Media[]>();

    private media: Media[] = [];

    removeMedia(mediaId: string) {
        const index = this.media.findIndex((el) => el._id === mediaId);
        this.media.splice(index, 1);
        this.mediaChanged.next(this.media.slice());
    }

    /* -- API Methods -- */

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
        this.http.delete(config.apiUrl + '/media/' + mediaId,
            this.sharedService.getRequestOptions())
                .subscribe(
                    (response: Response) => this.removeMedia(mediaId)
                )
    }

    uploadMedia(files: any[]) {
        const formData = new FormData();

        for(let i = 0; i < files.length; i++) {
            formData.append('mediaUpload', files[i]);
        }

        return this.http.post(config.apiUrl + '/media', formData,
            this.sharedService.getRequestOptions());
    }
}