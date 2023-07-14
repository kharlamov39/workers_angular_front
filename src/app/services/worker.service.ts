import { Observable } from "rxjs";
import { Worker } from "../models/worker";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export type keys = 'firstName' | 'lastName' | 'email' | 'salary'

@Injectable()
export class WorkerService {
    private url:string = 'http://localhost:4001/worker/';

    constructor(private http: HttpClient) {
    }

    getWorkers(groupId:string):Observable<Worker[]> {
        return this.http.get<Worker[]>(this.url + groupId);
    }

    createWorker(worker:Worker, groupId:string):Observable<Worker> {
        return this.http.post<Worker>(this.url + groupId, worker);
    }

    deleteWorker(workerId:string) {
        return this.http.delete(this.url + workerId);
    }

    editWorker(worker:Worker):Observable<Worker> {
        return this.http.patch<Worker>(this.url + worker._id, worker);
    }
}