import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Subject } from "rxjs/Subject";
import { environment as config } from '../../environments/environment';
import { HttpClient } from "../shared/http-client.service";

@Injectable()
export class ArticleService {
    constructor(private httpClient: HttpClient) {};

    articlesChanged = new Subject<Article[]>();
    private articles: Article[];
    private entity: string = 'articles';

    setArticles(articles: Article[]) {
        this.articles = articles;
    }

    getArticles() {
        if (this.articles) return this.articles.slice();
    }

    getArticle(articleId: string) {
        return this.articles.find((el) => el._id === articleId);
    }

    addArticle(article: Article) {
        this.articles.unshift(article);
        this.articlesChanged.next(this.articles.slice());
    }

    changeArticle(articleId: string, article: Article) {
        this.articles.forEach((el, index) => {
            if (el._id === articleId) {
                this.articles[index] = article;
            }
        });
        this.articlesChanged.next(this.articles.slice());
    }

    changeActiveStateFromArticle(articleId: string, activeState: boolean) {
        this.articles.forEach((el, index) => {
            if (el._id === articleId) {
                this.articles[index].active = activeState;
            }
        });
        this.articlesChanged.next(this.articles.slice());
    }

    removeArticle(articleId: string) {
        const index = this.articles.findIndex((el) => el._id === articleId);
        this.articles.splice(index, 1);
        this.articlesChanged.next(this.articles.slice());
    }

    /* -- API Methods -- */

    fetchArticles() {
        this.httpClient.get(`/${this.entity}`, { error: true }).subscribe(
            (articles: any) => {
                this.articles = articles;
                this.articlesChanged.next(this.articles.slice());
            }
        );
    }

    fetchArticle(articleId: string) {
        return this.httpClient.get(`/${this.entity}/${articleId}`);
    }

    createArticle(article: Article) {
        return this.httpClient.post(`/${this.entity}`, article);
    }

    deleteArticle(articleId: string) {
        this.httpClient.delete(`/${this.entity}/${articleId}`).subscribe(
            (article: any) => {
                this.removeArticle(articleId);
            }
        );
    }

    updateArticle(articleId: string, article: Article) {
        return this.httpClient.put(`/${this.entity}/${articleId}`, article);
    }

    changeActiveState(articleId: string, isActive: boolean) {
        this.httpClient.put(`/${this.entity}/${articleId}/active`, {
            active: isActive
        }).subscribe(
            (article: any) => {
                this.changeActiveStateFromArticle(articleId, isActive);
            }
        );
    }
}