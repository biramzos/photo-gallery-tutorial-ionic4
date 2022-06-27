import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {
    API = 'http://fd57-95-82-72-142.ngrok.io/api/v1';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get<any>(this.API + '/get');
    }

    addUser(name:string, password:string): Observable<any> {
        return this.http.post<any>(this.API + '/insert' ,{'name':name,'password':password});
    }

    updateUser(id:string,name:string, password:string): Observable<any> {
        let item = {'name':name,'password':password};
        return this.http.post<any>(this.API + '/update/' + id, item);
    }

    deleteUser(id:string): Observable<any> {
        return this.http.get<any>(this.API + '/delete/' + id);
    }

    getUser(id:string): Observable<any> {
        return this.http.get<any>(this.API + '/user/' + id);  
    }

    findUser(param:string): Observable<any>{
        return this.http.get<any>(this.API + '/find/' + param);
    }
}