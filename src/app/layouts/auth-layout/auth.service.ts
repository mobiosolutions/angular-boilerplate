import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

export interface login
{
  'email':string;
  'password':string;
}
export interface register
{
  'firstname':string;
  'lastname':string;
  'mobile':number;
  'files':string;
  'email':string;
  'password':string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpobj:HttpClient) { }
  login(params) {
    return this.httpobj.post<login[]>('http://localhost:1337/auth/local/',{params});
  }
  register(params) {
    return this.httpobj.post<register[]>('http://localhost:1337/auth/local/register',{params});
  }
}
