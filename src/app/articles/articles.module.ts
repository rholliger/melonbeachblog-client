import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleTestGuard } from './article-test-guard.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        QuillModule,
        ArticlesRoutingModule
    ],
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticleCreationComponent
    ],
    providers: [ArticleService, ArticleTestGuard],
    exports: [
        // ArticlesRoutingModule
    ]
})
export class ArticlesModule {}