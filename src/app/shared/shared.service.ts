import { Injectable } from "@angular/core";

import { Subject } from "rxjs/Subject";

@Injectable()
export class SharedService {
    constructor() {}

    buttonToggled = new Subject<{id: string, value: boolean}>();
}