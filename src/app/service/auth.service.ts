import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { stringify } from "querystring-ts";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(username:string, password:string){
    let data = {
       "username": username,
       "password": password,
       "client_id": "all",
       "grant_type": "password"
    };

    let headers = {
      'Content-Type': 'multipart/form-data'
    };

    return this.http.post('/api/token', stringify(data), {headers:headers}).pipe();
  }

}
