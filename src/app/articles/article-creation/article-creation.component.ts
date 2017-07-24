import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import swal from 'sweetalert2';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { MessagingService } from '../../core/messaging.service';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {
  article: Article;
  id: string;
  editMode = false;
  @ViewChild('f') form: NgForm;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
      }
    );

    if (this.editMode) {
      this.articleService.fetchArticle(this.id).subscribe(
        (data) => this.article = data.json()
      );
    } else {
      this.article = new Article('', '', '', '');
    }
  }

  navigateBackToTheList() {
    this.router.navigate(['/articles']);
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      this.articleService.updateArticle(this.id, this.article).subscribe(
        (data) => {
          this.articleService.changeArticle(this.id, data.json())
          this.navigateBackToTheList()
        }
      )
    } else {
      this.articleService.createArticle(this.article).subscribe(
        () => this.navigateBackToTheList()
      );
    }
  }

  onCancel() {
    this.messagingService.warning('Leave Route', 'Do you really want to leave the route?')
      .then(() => this.navigateBackToTheList())
      .catch(() => null);
  }
}
