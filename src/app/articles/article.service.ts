import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from './article.model';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ArticleService {
    constructor(private http: Http) {}

    articlesChanged = new Subject<Article[]>();

    private articles: Article[] = [];

    setArticles(articles: Article[]) {
        this.articles = articles;
    }

    getArticles() {
        return this.articles.slice();
    }

    udpateArticle(articleId: string, article: Article) {
        this.articles[articleId] = article;
        this.articlesChanged.next(this.articles.slice());
    }

    fetchArticles() {
        this.http.get('http://localhost:3000/api/articles').subscribe(
            (response: Response) => {
                const articles = response.json();
                console.log(articles);
                this.articles = articles;
                this.articlesChanged.next(this.articles.slice());
            }
        )
    }

    changeActiveState(articleId: string, isActive: boolean) {
        console.log('adsdasdd', articleId, isActive);
        this.http.put('http://localhost:3000/api/articles/'+articleId+'/active', {
            active: isActive
        }).subscribe(
            (response: Response) => {
                const article = response.json();
                this.udpateArticle(articleId, article);
            }
        );
    }

    // Add article
    // Edit article
    // Delete article
}