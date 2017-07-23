import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaComponent } from './media.component';
import { MediaRoutingModule } from './media-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MediaRoutingModule
    ],
    declarations: [
        MediaComponent
    ],
    exports: [
        MediaRoutingModule
    ]
})
export class MediaModule {}