import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {
    private url: string = 'http://localhost:4001/auth/'

    public currentUser$ = new BehaviorSubject<User | null>(null)

    constructor(public http: HttpClient, private router: Router) {
    }

    register(user: User) {
        this.http.post<User>(this.url + 'register', user).subscribe( res => {
            if(res.token) {
                window.localStorage.setItem('token', res.token )
            }
            this.currentUser$.next(res);
            this.router.navigate(['']);
        }) 
    }

    login(email:string, password: string) {
        this.http.post<User>(this.url + 'login', { email, password }).subscribe( res => {
            if(res.token) {
                window.localStorage.setItem('token', res.token )
            }
            this.currentUser$.next(res);
            this.router.navigate(['']);
        } );
    }

    authMe() {
        const token = window.localStorage.getItem('token')
        if(token) {
            this.http.get<User>( this.url + 'me' )
            .subscribe( 
                (res) => this.currentUser$.next(res)
            )
        } else {
            this.router.navigate(['login'])
        }
        
    }

    logout() {
        window.localStorage.removeItem('token')
        this.currentUser$.next(null)
    }


}