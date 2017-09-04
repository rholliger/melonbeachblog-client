import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from './article.model';
import { Subject } from "rxjs/Subject";
import { environment as config } from '../../environments/environment';
import { SharedService } from "../shared/shared.service";

@Injectable()
export class ArticleService {
    constructor(private http: Http, private sharedService: SharedService) {};

    articlesChanged = new Subject<Article[]>();
    private articles: Article[] = [];

    setArticles(articles: Article[]) {
        this.articles = articles;
    }

    getArticles() {
        return this.articles.slice();
    }

    getArticle(articleId: string) {
        return this.articles.find((el) => el._id === articleId);
    }

    changeArticle(articleId: string, article: Article) {
        this.articles[articleId] = article;
        this.articlesChanged.next(this.articles.slice());
    }

    removeArticle(articleId: string) {
        const index = this.articles.findIndex((el) => el._id === articleId);
        this.articles.splice(index, 1);
        this.articlesChanged.next(this.articles.slice());
    }

    /* -- API Methods -- */

    fetchArticles() {
        this.http.get(config.apiUrl + '/articles').subscribe(
            (response: Response) => {
                const articles = response.json();
                this.articles = articles;
                this.articlesChanged.next(this.articles.slice());
            }
        )
    }

    fetchArticle(articleId: string) {
        return this.http.get(config.apiUrl + '/articles/' + articleId);
    }

    createArticle(article: Article) {
        return this.http.post(config.apiUrl + '/articles', article, 
            this.sharedService.getRequestOptions());
    }

    deleteArticle(articleId: string) {
        this.http.delete(config.apiUrl + '/articles/' + articleId,
            this.sharedService.getRequestOptions())
                .subscribe(
                    (response: Response) => {
                        this.removeArticle(articleId);
                    }
                );
    }

    updateArticle(articleId: string, article: Article) {
        return this.http.put(config.apiUrl + '/articles/' + articleId, article,
            this.sharedService.getRequestOptions());
    }

    changeActiveState(articleId: string, isActive: boolean) {
        this.http.put(config.apiUrl + '/articles/' + articleId + '/active', {
            active: isActive
        }, this.sharedService.getRequestOptions()).subscribe(
            (response: Response) => {
                const article = response.json();
                this.changeArticle(articleId, article);
            }
        );
    }
}