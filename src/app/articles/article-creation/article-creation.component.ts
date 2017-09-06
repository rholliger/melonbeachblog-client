import { Component, OnInit, ViewChild, Input, Renderer2, AfterViewChecked, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import swal from 'sweetalert2';

import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { MessagingService } from '../../core/messaging.service';
import { Media } from "../../media/media.model";
import { MediaService } from "../../media/media.service";

import * as Quill from 'quill';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['../../../shared_styles/form.scss', './article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit, AfterViewChecked {
  article: Article;
  id: string;
  editMode: boolean = false;
  topElementMedia: Media;
  showTopElement: boolean = false;
  showMediaSelector: boolean = false;
  editorContent: string = '';
  @ViewChild('f') form: NgForm;
  @ViewChild('quillEditor') quillEditor;
  @Input() tinyTest: string;
  
  editor;

  constructor(
    private articleService: ArticleService,
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute,
    private messagingService: MessagingService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // Use align styles instead of align classes for the quill editor
    var AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
      }
    );

    if (this.editMode) {
      this.articleService.fetchArticle(this.id).subscribe(
        (article: any) => {
          this.article = article;
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

  ngAfterViewChecked() {
    // The toolbar buttons of the quill editor need to have a tabIndex of -1,
    // so they don't get focused if a user tabs to the editor
    if (this.quillEditor) {
      const quillToolbarButtons = this.quillEditor.elementRef
        .nativeElement.querySelectorAll('.ql-toolbar button');
      quillToolbarButtons.forEach(
        (button) => this.renderer.setAttribute(button, 'tabIndex', '-1')
      );
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

    // this.article.content = this.editorContent;

    if (this.editMode) {
      this.articleService.updateArticle(this.id, this.article).subscribe(
        (article: any) => {
          console.log('edited ARTICLE', article);
          this.articleService.changeArticle(this.id, article);
          this.navigateBackToTheList();
        }
      )
    } else {
      this.articleService.createArticle(this.article).subscribe(
        (article: any) => {
          this.articleService.addArticle(article);
          this.navigateBackToTheList();
        }
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

  onChangeTopElement() {
    this.onOpenMediaSelector();
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
    this.showMediaSelector = true;
  }
  
  onMediaSelection(selectedMedia: Media) {
    this.article.mediaElement = {};
    this.topElementMedia = selectedMedia;
    this.showTopElement = true;
    this.showMediaSelector = false;
  }

  removeMediaSelector() {
    this.showMediaSelector = false;
  }

  // TODO: Should we be able to save by pressing cmd + save?
  @HostListener('keydown', ['$event'])
  onKeyUpHandler(event: any) {
    console.log('key pressed', event.keyCode, event.metaKey);
    if (event.metaKey && (event.keyCode === 83)) {
      event.preventDefault();
      this.onSubmit(this.form);
      return false;
    }
  }
}
