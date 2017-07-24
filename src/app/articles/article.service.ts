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

    removeArticle(articleId: string) {
        const index = this.articles.findIndex((el) => el._id === articleId);
        this.articles.splice(index, 1);
        this.articlesChanged.next(this.articles.slice());
    }

    fetchArticles() {
        this.http.get('http://localhost:3000/api/articles').subscribe(
            (response: Response) => {
                const articles = response.json();
                this.articles = articles;
                this.articlesChanged.next(this.articles.slice());
            }
        )
    }

    changeActiveState(articleId: string, isActive: boolean) {
        this.http.put('http://localhost:3000/api/articles/'+articleId+'/active', {
            active: isActive
        }).subscribe(
            (response: Response) => {
                const article = response.json();
                this.udpateArticle(articleId, article);
            }
        );
    }

    createArticle(article: Article) {
        const data = {
            title: article.title,
            slug: article.slug,
            category: article.category,
            content: article.content
        };
        return this.http.post('http://localhost:3000/api/articles', data);
    }

    deleteArticle(articleId: string) {
        this.http.delete('http://localhost:3000/api/articles/' + articleId).subscribe(
            (response: Response) => {
                this.removeArticle(articleId);
            }
        );
    }

    // Add article
    // Edit article
    // Delete article
}