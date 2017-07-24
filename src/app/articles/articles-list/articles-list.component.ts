import { Component, OnInit } from '@angular/core';

import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    // this.articles = this.articleService.getArticles();
    this.articleService.fetchArticles();

    this.articleService.articlesChanged.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }

}
