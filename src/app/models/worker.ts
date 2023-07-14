export class Worker  {
    firstName: string
    lastName: string
    email: string
    salary: number
    group?: string
    _id?: string

    constructor(firstName:string, lastName:string, email:string, salary:number) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email 
        this.salary = salary
    } 
}