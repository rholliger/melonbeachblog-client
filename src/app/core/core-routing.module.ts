import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ArticlesModule } from "../articles/articles.module";
import { MediaModule } from "../media/media.module";

const coreRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'articles', loadChildren: () => ArticlesModule },
        { path: 'media', loadChildren: () => MediaModule }
    ] },
    // { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard], children: [
    //     { path: '', component: ArticlesListComponent },
    //     { path: 'new', component: ArticleCreationComponent, /*canDeactivate: [ArticleTestGuard]*/ },
    //     { path: 'edit/:id', component: ArticleCreationComponent }
    // ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}