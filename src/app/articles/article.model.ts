export class Article {
    public _id: string;
    public title: string;
    public slug: string;
    public category: string;
    public content: string;
    public active: boolean;

    constructor(
        title: string,
        slug: string,
        category: string,
        content: string,
        active?: boolean
    ) {
        this.title = title;
        this.slug = slug;
        this.category = category;
        this.content = content;
        this.active = active;
    }
}