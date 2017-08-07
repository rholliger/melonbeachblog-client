import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { SharedService } from "../../shared/shared.service";
import { MessagingService } from "../../core/messaging.service";
import { ListService } from "../../shared/list/list.service";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private listService: ListService,
    private messagingService: MessagingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.articles = this.articleService.getArticles();
    this.articleService.fetchArticles();

    this.articleService.articlesChanged.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );

    this.sharedService.buttonToggled.subscribe(
      (data: any) => {
        this.articleService.changeActiveState(data.id, data.value);
      }
    )

    this.listService.clickedEditButton.subscribe(
      (id: string) => this.router.navigate(['edit', id], { relativeTo: this.route })
    )

    this.listService.clickedDeleteButton.subscribe(
      (id: string) => {
        this.messagingService.warning('Delete this Article?', 'Do you really want to delete this article?')
          .then(() => this.articleService.deleteArticle(id))
          .catch(() => null);
      }
    )
  }

}
