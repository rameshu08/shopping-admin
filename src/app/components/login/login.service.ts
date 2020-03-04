import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
    providedIn:'root'

})

export class LoginService {
    constructor ( private http: HttpClient){
}

addUser(payload){
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post("http://localhost:3000/users",payload)

}
getUser(payload){
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post("http://localhost:3000/users"+ '/login',payload)

}
}