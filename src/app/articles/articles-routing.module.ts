import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleTestGuard } from './article-test-guard.service';
import { AuthGuard } from "../auth/auth.guard";

const articlesRoutes: Routes = [
    { path: '', component: ArticlesListComponent },
    { path: 'new', component: ArticleCreationComponent, /*canDeactivate: [ArticleTestGuard]*/ },
    { path: 'edit/:id', component: ArticleCreationComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [RouterModule]
})
export class ArticlesRoutingModule {}