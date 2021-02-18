import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { login } from '../../shared/models/login.models';
import { register } from '../../shared/models/register.models';

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
