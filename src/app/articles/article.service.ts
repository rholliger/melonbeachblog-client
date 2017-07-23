import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
    constructor(private http: Http) {}

    private articles: Article[] = [];

    setArticles(articles: Article[]) {
        this.articles = articles;
    }

    getArticles() {
        return this.articles;
    }

    getArticlesFromAServer() {
        this.http.get('http://localhost:3000/api/articles').subscribe(
            (response: Response) => {
                const data = response.json();
                for(let article of data) {
                    console.log(article.title);
                }
            }
        )
    }

    // Add article
    // Edit article
    // Delete article
}