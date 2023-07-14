export class User  {
    fullName: string  
    email: string
    password: string
    company: string
    groups: string[]
    token?: string
    _id: string

    constructor(fullName:string, email:string, password: string, company:string) {
        this.fullName = fullName
        this.email = email
        this.password = password
        this.company = company 
        this.groups = []
    } 
}