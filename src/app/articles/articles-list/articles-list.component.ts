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
  testArticles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    const firstArticle = new Article('Erster Artikel', 'hallo-welt', 'news', 'blablabla', new Date(), true);
    const secondArticle = new Article('Zweiter Artikel', 'hallo-welt', 'news', 'blablabla', new Date(), true);

    this.testArticles.push(firstArticle);
    this.testArticles.push(secondArticle);

    this.articleService.setArticles(this.testArticles);

    this.articles = this.articleService.getArticles();

    this.articleService.getArticlesFromAServer();
  }

}
