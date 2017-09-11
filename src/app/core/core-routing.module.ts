import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "../auth/auth.guard";

/* Uncomment to load module synchronously */
// import { ArticlesModule } from "../articles/articles.module";
// import { MediaModule } from "../media/media.module";

/* Uncomment to load module synchronously */
// export function loadArticlesModule() {
//     return ArticlesModule;
// }

// export function loadMediaModule() {
//     return MediaModule;
// }

const coreRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
        { path: '', redirectTo: 'articles', pathMatch: 'full' },
        /* Uncomment to load module synchronously */
        // { path: 'articles', loadChildren: loadArticlesModule},
        // { path: 'media', loadChildren: loadMediaModule}
        /* Comment to disable lazy loading */
        { path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule'},
        { path: 'media', loadChildren: 'app/media/media.module#MediaModule'}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}