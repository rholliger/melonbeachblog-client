export class Media {
    public _id: string;
    public fileName: string;
    public mimeType: string;
    public createdDate: Date;

    constructor(
        fileName: string,
        mimeType: string
    ) {
        this.fileName = fileName;
        this.mimeType = mimeType;
    }
}