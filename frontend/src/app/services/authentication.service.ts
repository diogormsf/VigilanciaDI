import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    uri = 'http://localhost:4000';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const user: User = new User();
        user.id = '5ce41b885855493424632072';
        user.username = username;
        user.nome = 'MÁRIO JOÃO BARATA CALHA';
        user.responsavel = ['5ce41b86585549342463206c'];
        user.estatuto = 'Auxiliar';
        user.sabatica = false;
        user.gestor = false;
        localStorage.setItem('currentUser', JSON.stringify(user));

        return this.currentUserSubject;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
