import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { NotificationsService } from "angular2-notifications";

import { environment as config } from '../../environments/environment';
import { TokenService } from "../auth/token.service";

interface AppOptions {
    showErrors: boolean
};

@Injectable()
export class HttpClient {
    constructor(
        private http: Http,
        private notificationsService: NotificationsService,
        private tokenService: TokenService) {}

    appOptionDefaults: AppOptions = {
        showErrors: true
    };

    get(url: string, appOptions?: object, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                this.showError(error.status, error.statusText, error._body);
                return Observable.throw(error)
            });
    }

    post(url: string, body: any, appOptions?: AppOptions, options?: RequestOptionsArgs): Observable<Response> {
        appOptions = Object.assign({}, this.appOptionDefaults, appOptions);
        url = this.updateUrl(url);
        return this.http.post(url, body, this.setAuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => {
                if (appOptions.showErrors)
                    this.showError(error.status, error.statusText, error._body);
                return Observable.throw(error)
            });
    }

    put(url: string, body: any, appOptions?: object, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.http.put(url, body, this.setAuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => {
                this.showError(error.status, error.statusText, error._body);
                return Observable.throw(error)
            });
    }

    delete(url: string, appOptions?: object, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return this.http.delete(url, this.setAuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => {
                this.showError(error.status, error.statusText, error._body);
                return Observable.throw(error)
            });
    }

    private updateUrl(entity: string) {
        return config.apiUrl + entity;
    }

    private showError(status: string, statusText: string, body: string) {
        console.log('showError', status, statusText, body);
        this.notificationsService.error(`${status}: ${statusText}`, JSON.parse(body).message);
    }

    private setAuthHeaders() {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${this.tokenService.getAuthToken()}`);
        const options = new RequestOptions({
            headers: headers
        });
        return options;
    }
}