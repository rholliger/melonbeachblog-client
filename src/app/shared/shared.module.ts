import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { PageHeaderComponent } from "./page-header.component";
import { AppRoutingModule } from "../app-routing.module";
import { ListItemComponent } from './list/list-item/list-item.component';
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { SharedService } from "./shared.service";
import { ListService } from "./list/list.service";
import { FileSizePipe } from "./file-size.pipe";
import { ButtonComponent } from './button/button.component';
import { RichTextEditorComponent } from "./rich-text-editor/rich-text-editor.component";
import { MediaSelectorComponent } from './media-selector/media-selector.component';
import { MediaItemComponent } from './media-selector/media-item/media-item.component';
import { HttpClient } from "./http-client.service";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
    ],
    declarations: [
        ListComponent,
        PageHeaderComponent,
        ListItemComponent,
        ToggleButtonComponent,
        FileSizePipe,
        ButtonComponent,
        RichTextEditorComponent,
        MediaSelectorComponent,
        MediaItemComponent
    ],
    providers: [SharedService, ListService, HttpClient],
    exports: [
        ListComponent,
        PageHeaderComponent,
        FileSizePipe,
        ButtonComponent,
        RichTextEditorComponent,
        MediaSelectorComponent
    ]
})
export class SharedModule {}