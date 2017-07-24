import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleService } from './article.service';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
    imports: [
        CommonModule,
        ArticlesRoutingModule
    ],
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticleItemComponent,
        ToggleButtonComponent
    ],
    providers: [ArticleService],
    exports: [
        ArticlesRoutingModule
    ]
})
export class ArticlesModule {}