import { Subject } from "rxjs/Subject";

export class SharedService {
    constructor() {}

    buttonToggled = new Subject<{id: string, value: boolean}>();
}