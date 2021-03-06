import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    @Input() headerColumns: string[] = [];
    @Input() rows: object[] = [];
    @Input() data: any[] = [];
    @Input() isLoading: boolean;

    ngOnInit() {
    }
}