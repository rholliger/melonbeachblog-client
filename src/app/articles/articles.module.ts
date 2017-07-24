import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleService } from './article.service';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleTestGuard } from './article-test-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArticlesRoutingModule
    ],
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticleItemComponent,
        ToggleButtonComponent,
        ArticleCreationComponent
    ],
    providers: [ArticleService, ArticleTestGuard],
    exports: [
        ArticlesRoutingModule
    ]
})
export class ArticlesModule {}