export class Article {
    public id: number;
    public title: string;
    public slug: string;
    public category: string;
    public content: string;
    public createdDate: Date;
    public active: boolean;

    constructor(
        title: string,
        slug: string,
        category: string,
        content: string,
        createdDate: Date,
        active: boolean
    ) {
        this.title = title;
        this.slug = slug;
        this.category = category;
        this.content = content;
        this.createdDate = createdDate;
        this.active = active;
    }
}