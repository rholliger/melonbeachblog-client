import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { PageHeaderComponent } from "./page-header.component";
import { AppRoutingModule } from "../app-routing.module";
import { ListItemComponent } from './list/list-item/list-item.component';
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { SharedService } from "./shared.service";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    declarations: [
        ListComponent,
        PageHeaderComponent,
        ListItemComponent,
        ToggleButtonComponent
    ],
    providers: [SharedService],
    exports: [
        ListComponent,
        PageHeaderComponent
    ]
})
export class SharedModule {}