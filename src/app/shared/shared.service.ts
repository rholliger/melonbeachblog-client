import { Injectable } from "@angular/core";
import { RequestOptions, Headers } from "@angular/http";

import { Subject } from "rxjs/Subject";

@Injectable()
export class SharedService {
    constructor() {}

    buttonToggled = new Subject<{id: string, value: boolean}>();
}