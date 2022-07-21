import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string): Observable<boolean> {
        const hashValue: string = Buffer.from(username + ':' + password).toString('base64');
        return this.http
            .get<any>(environment.apiRoot + '/login/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + hashValue
                },
                withCredentials: true
            })
            .pipe(
                mapTo(true),
                catchError(_ => of(false))
            );
    }

    isAuthenticated(): Observable<boolean> {
        return this.http
            .get(environment.apiRoot + '/authenticated', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(
                mapTo(true),
                catchError(_ => of(false))
            );
    }

    logout(): Observable<boolean> {
        return this.http
            .get<any>(environment.apiRoot + '/logout/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .pipe(
                mapTo(true),
                catchError(_ => of(false))
            );
    }
}
