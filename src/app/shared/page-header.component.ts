import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    template: `
        <div class="header">
            <h1 class="pull-left">{{ title }}</h1>
            <div class="pull-right" *ngIf="hasNewLink">
                <a class="pull-right icon new" routerLink="new">
                <span class="glyphicon glyphicon-plus"></span>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
    `,
    styles: [`
        .header {
            margin: 12px 0 29px;
            padding-bottom: 8px;
            border-bottom: 1px solid #E0E0E0;
        }

        h1 {
            margin: 0;
        }

        span {
            font-size: 30px;
        }
    `]
})
export class PageHeaderComponent {
    @Input() title: string = 'Page Title';
    @Input() hasNewLink: boolean = false;
}