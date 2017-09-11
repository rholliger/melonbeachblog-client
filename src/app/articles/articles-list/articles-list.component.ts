import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Subject } from "rxjs/Subject";

import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { SharedService } from "../../shared/shared.service";
import { ListService } from "../../shared/list/list.service";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  isArticleListLoading: boolean = true;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private articleService: ArticleService,
    private sharedService: SharedService,
    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.articleService.getArticles()) {
      this.articles = this.articleService.getArticles();
      this.isArticleListLoading = false;
    } else {
      this.articleService.fetchArticles();
    }

    this.articleService.articlesChanged
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (articles: Article[]) => {
          this.isArticleListLoading = false;
          this.articles = articles;
        }
      );

    this.sharedService.buttonToggled
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (data: any) => {
          this.articleService.changeActiveState(data.id, data.value);
        }
      )

    this.listService.clickedEditButton
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (id: string) => this.router.navigate(['edit', id], { relativeTo: this.route })
      )

    this.listService.clickedDeleteButton
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        (id: string) => this.articleService.deleteArticle(id)
      )
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
