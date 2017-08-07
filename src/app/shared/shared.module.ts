import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { PageHeaderComponent } from "./page-header.component";
import { AppRoutingModule } from "../app-routing.module";
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    declarations: [
        ListComponent,
        PageHeaderComponent,
        ListItemComponent
    ],
    exports: [
        ListComponent,
        PageHeaderComponent
    ]
})
export class SharedModule {}