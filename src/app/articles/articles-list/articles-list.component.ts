import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationsService } from "angular2-notifications";

import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { SharedService } from "../../shared/shared.service";
import { MessagingService } from "../../core/messaging.service";
import { ListService } from "../../shared/list/list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  clickedDeleteSubscription: Subscription;

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private listService: ListService,
    private messagingService: MessagingService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationsService: NotificationsService) { }

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
        this.notificationsService.error('This option is not allowed', 'Not authorized');
      }
    )

    this.listService.clickedEditButton.subscribe(
      (id: string) => this.router.navigate(['edit', id], { relativeTo: this.route })
    )

    this.clickedDeleteSubscription = this.listService.clickedDeleteButton.subscribe(
      (id: string) => this.articleService.deleteArticle(id)
    )
  }

  ngOnDestroy() {
    this.clickedDeleteSubscription.unsubscribe();
  }

}
