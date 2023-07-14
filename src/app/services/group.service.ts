import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Group } from "../models/group";
import { Observable } from "rxjs";

@Injectable()
export class GroupService {
    url:string = 'http://localhost:4001/group'

    constructor(private http: HttpClient) {}

    getGroup():Observable<Group[]> {
        return this.http.get<Group[]>(this.url)
    }

    createGroup(title: string):Observable<Group> {
        return this.http.post<Group>(this.url, {title})
    }

    deleteGroup() {

    }
}