import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

export class ListService {
    constructor() {}
    
    clickedEditButton = new Subject<string>();
    clickedDeleteButton = new Subject<string>();
}