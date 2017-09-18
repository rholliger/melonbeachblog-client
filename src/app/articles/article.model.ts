import { Media } from "../media/media.model";

export class Article {
    public _id: string;
    public title: string;
    public slug: string;
    public category: string;
    public content: string;
    public description: string;
    public createdDate: Date;
    public active: boolean;
    public mediaElement: any;

    constructor(
        title: string,
        slug: string,
        category: string,
        content: string,
        description: string,
        active?: boolean
    ) {
        this.title = title;
        this.slug = slug;
        this.category = category;
        this.content = content;
        this.description = description;
        this.active = active;
    }
}