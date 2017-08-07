import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaListComponent } from './media-list/media-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        MediaRoutingModule,
        SharedModule
    ],
    declarations: [
        MediaComponent,
        MediaListComponent
    ],
    exports: [
        MediaRoutingModule
    ]
})
export class MediaModule {}