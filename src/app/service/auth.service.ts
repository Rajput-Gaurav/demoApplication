import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = environment.BASE_API_URL + '/login'
  registerUrl = environment.BASE_API_URL + '/register'

  // create instance or object of Subject:
  subject = new Subject();

  constructor(private http: HttpClient) { }

  // call the Register API:
  register(userData){
    return this.http.post(this.registerUrl, userData);
  }

  // call the Login API:
  login(creds){
    return this.http.post(this.loginUrl, creds)
    .pipe(
      map(data => {
        localStorage.setItem('user', JSON.stringify(data));
        // check user available or not:
        this.subject.next(this.checkUser());
        return data;
      })
    )
  }

  // logout method():
  // destroy the user or remove from localStorage:
  logout(){
    localStorage.removeItem("user");
    // check user available or not:
    this.subject.next(this.checkUser());
  }

  // checkUser method():
  // check the user available in localStorage or not:
  checkUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  // check status of user():
  getCurrentUserStatus(){
    return this.subject.asObservable();
  }
}
