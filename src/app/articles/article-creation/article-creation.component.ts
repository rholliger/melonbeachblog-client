import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import swal from 'sweetalert2';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { MessagingService } from '../../core/messaging.service';
import { Media } from "../../media/media.model";
import { MediaService } from "../../media/media.service";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['../../../shared_styles/form.scss', './article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {
  article: Article;
  id: string;
  editMode: boolean = false;
  topElementMedia: Media;
  showTopElement: boolean = false;
  showMediaSelector: boolean = false;
  editorContent: string = '';
  @ViewChild('f') form: NgForm;
  @Input() tinyTest: string;
  
  editor;

  constructor(
    private articleService: ArticleService,
    private mediaService: MediaService,
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
        (data) => {
          this.article = data.json();
          if (this.article.mediaElement) {
            this.showTopElement = true;
            this.topElementMedia = this.article.mediaElement.mediaFile;
          }
        }
      );
    } else {
      this.article = new Article('', '', '', '');
    }
  }

  navigateBackToTheList() {
    this.router.navigate(['/articles']);
  }

  onSubmit(form: NgForm) {
    if (this.topElementMedia) {
      this.article.mediaElement = {
        name: '',
        caption: form.value.caption,
        mediaFile: this.topElementMedia,
      }
    } else {
      this.article.mediaElement = this.topElementMedia;
    }

    this.article.content = this.editorContent;

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
    // this.messagingService.warning('Leave Route', 'Do you really want to leave the route?')
    //   .then(() => this.navigateBackToTheList())
    //   .catch(() => null);
    this.navigateBackToTheList();
  }

  onEditorChanged(content: string) {
    this.editorContent = content;
  }

  onRemoveTopElement() {
    this.messagingService.warning('Remove Media',
      'Do you also want to remove this file from the media browser?')
      .then(() => {
        this.mediaService.deleteMedia(this.topElementMedia._id);
        this.removeTopElement();
      })
      .catch(() => {
        this.removeTopElement();
      });
  }

  removeTopElement() {
    this.topElementMedia = null;
    this.showTopElement = false;
  }

  onUploadStarted() {
    console.log('--- UPLOAD HAS STARTED ---');
    this.article.mediaElement = {};
    this.showTopElement = true;
  }

  onUploadDone(uploadedMedia: Media) {
    console.log('--- UPLOAD IS DONE ---', uploadedMedia);
    this.topElementMedia = uploadedMedia;
  }

  onOpenMediaSelector() {
    console.log('media selector');
    this.showMediaSelector = true;
  }
}
