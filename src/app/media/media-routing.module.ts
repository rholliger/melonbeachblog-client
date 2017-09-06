import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaComponent } from './media.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaUploadComponent } from "./media-upload/media-upload.component";
import { AuthGuard } from "../auth/auth.guard";

const mediaRoutes: Routes = [
    { path: '', component: MediaListComponent },
    { path: 'new', component: MediaUploadComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(mediaRoutes)
    ],
    exports: [RouterModule]
})
export class MediaRoutingModule {}
