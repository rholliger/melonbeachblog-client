import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaComponent } from './media.component';

const mediaRoutes: Routes = [
    { path: 'media', component: MediaComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(mediaRoutes)
    ],
    exports: [RouterModule]
})
export class MediaRoutingModule {}
