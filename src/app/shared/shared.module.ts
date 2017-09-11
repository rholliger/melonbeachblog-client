import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { PageHeaderComponent } from "./page-header.component";
import { ListItemComponent } from './list/list-item/list-item.component';
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { SharedService } from "./shared.service";
import { ListService } from "./list/list.service";
import { FileSizePipe } from "./file-size.pipe";
import { ButtonComponent } from './button/button.component';
import { MediaSelectorComponent } from './media-selector/media-selector.component';
import { MediaItemComponent } from './media-selector/media-item/media-item.component';
import { HttpClient } from "./http-client.service";
import { MediaService } from "../media/media.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        ListComponent,
        PageHeaderComponent,
        ListItemComponent,
        ToggleButtonComponent,
        FileSizePipe,
        ButtonComponent,
        MediaSelectorComponent,
        MediaItemComponent
    ],
    providers: [SharedService, ListService, HttpClient, MediaService],
    exports: [
        ListComponent,
        PageHeaderComponent,
        FileSizePipe,
        ButtonComponent,
        MediaSelectorComponent
    ]
})
export class SharedModule {}