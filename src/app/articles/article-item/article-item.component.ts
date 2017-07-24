import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { MessagingService } from '../../core/messaging.service';

@Component({
  selector: '[app-article-item]',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private articleService: ArticleService,
    private messagingService: MessagingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onClickToggleActiveState(event: any) {
    this.articleService.changeActiveState(this.article._id, event.target.checked);
  }

  onDeleteArticle() {
    this.messagingService.warning('Delete this Article?', 'Do you really want to delete this article?')
      .then(() => this.articleService.deleteArticle(this.article._id))
      .catch(() => null);
  }

  onEditArticle() {
    // Go to the edit route
    this.router.navigate(['edit', this.article._id], { relativeTo: this.route });
  }
}
