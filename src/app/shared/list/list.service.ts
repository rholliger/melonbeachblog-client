import { Injectable } from "@angular/core";

import { Subject } from 'rxjs/Subject';

export class ListService {
    constructor() {}
    
    clickedEditButton = new Subject<string>();
    clickedDeleteButton = new Subject<string>();
}