import { Subject } from "rxjs/Subject";

export class SharedService {
    constructor() {}

    buttonToggled = new Subject<{id: string, value: boolean}>();
    clickedEditButton = new Subject<string>();
    clickedDeleteButton = new Subject<string>();
}