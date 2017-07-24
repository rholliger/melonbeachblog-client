import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newArticle = new Article(
      form.value.title,
      form.value.slug,
      form.value.category,
      form.value.content
    );

    this.articleService.createArticle(newArticle).subscribe(
      () => this.router.navigate(['../'], { relativeTo: this.currentRoute })
    );
  }

  onCancel() {
    this.messagingService.warning('Leave Route', 'Do you really want to leave the route?')
      .then(() => this.router.navigate(['../'], { relativeTo: this.currentRoute }))
      .catch(() => null);
  }
}
