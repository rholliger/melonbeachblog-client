import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleTestGuard } from './article-test-guard.service';

const articlesRoutes: Routes = [
    { path: 'articles', component: ArticlesComponent, children: [
        { path: '', component: ArticlesListComponent },
        { path: 'new', component: ArticleCreationComponent, /*canDeactivate: [ArticleTestGuard]*/ }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [RouterModule]
})
export class ArticlesRoutingModule {}