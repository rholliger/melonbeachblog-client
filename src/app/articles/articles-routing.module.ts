import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';

const articlesRoutes: Routes = [
    { path: 'articles', component: ArticlesComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [RouterModule]
})
export class ArticlesRoutingModule {}