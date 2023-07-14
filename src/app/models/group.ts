export class Group {
    title: string
    author: string
    workers: string[]
    _id: string

    constructor(title: string, author: string) {
        this.title = title
        this.author = author 
    }
}