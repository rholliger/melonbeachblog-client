import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaComponent } from './media.component';
import { MediaListComponent } from './media-list/media-list.component';

const mediaRoutes: Routes = [
    { path: 'media', component: MediaComponent, children: [
        { path: '', component: MediaListComponent }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(mediaRoutes)
    ],
    exports: [RouterModule]
})
export class MediaRoutingModule {}
