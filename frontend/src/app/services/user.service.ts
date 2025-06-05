import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, of, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getUserByUsername(username:string): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}?username=${username}`);
  }

  getUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
  verifyLogin(username: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}?username=${username}`).pipe(
      switchMap(users => {
        const user = users.find(u => u.password === password);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          return of(user);
        }
        return throwError(() => new Error('Invalid Credentials'));
      })
    );
  }
  
  deleteUser(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  register(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user.id}`,user)
  }
}
