import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleTestGuard } from './article-test-guard.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArticlesRoutingModule,
        SharedModule
    ],
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticleItemComponent,
        ArticleCreationComponent
    ],
    providers: [ArticleService, ArticleTestGuard],
    exports: [
        ArticlesRoutingModule
    ]
})
export class ArticlesModule {}