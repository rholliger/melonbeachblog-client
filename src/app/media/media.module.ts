import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaUploadComponent } from './media-upload/media-upload.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MediaRoutingModule
    ],
    declarations: [
        MediaComponent,
        MediaListComponent,
        MediaUploadComponent
    ]
})
export class MediaModule {}