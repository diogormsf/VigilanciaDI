import { ProfessorService } from './professor.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { Professor } from '../models/professor';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri = 'http://localhost:4000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private professorService: ProfessorService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let params = new HttpParams();

    params = params.append('username', username);
    params = params.append('password', password);

    const sequence$ = this.http.get(`${this.uri}/login`, { params: params })
      .pipe(
        switchMap(data => {
          return this.professorService.getProfessorById(data['professorid']);
        }),
        catchError((e) => {
          return throwError(e);
        })
      );

    return sequence$;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
