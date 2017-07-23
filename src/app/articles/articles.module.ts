import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ArticlesRoutingModule
    ],
    declarations: [
        ArticlesComponent
    ],
    exports: [
        ArticlesRoutingModule
    ]
})
export class ArticlesModule {}