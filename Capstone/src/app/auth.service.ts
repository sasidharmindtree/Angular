import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loginSubject = new Subject<boolean>();
   obj = {};
users: User[] = [
  { id: 1, name: 'admin', email: 'admin@admin.com', phoneNumber: '9900000000',
  password: 'abc12@Abc', isBlock: false, role: '1', establishment: [], reviews: [], bookingList: [] },
  { id: 2, name: 'shalu', email: 'shalu@123.com', phoneNumber: '9900000000',
  password: 'abc12@Abc', isBlock: false, role: '2', establishment: [], reviews: [], bookingList: [] },
  { id: 3, name: 'test', email: 'test@test.com', phoneNumber: '9900000000',
  password: '12345678', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: [] },
  { id: 4, name: 'test1', email: 'psasi580@gmail.com', phoneNumber: '9900000000',
  password: '123', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: []}
];
  constructor(private router: Router) { }
  logIn(signinForm) {
    if (signinForm) {
      const sign = this.users.find (x => x.email === signinForm.email && x.password === signinForm.password);
      if (sign) {
        this.obj = sign;
        this.getprofile();
        this.isLoggedIn = true;
        this.loginSubject.next(this.isLoggedIn);
        return true;
      } else {
        this.isLoggedIn = false;
        this.loginSubject.next(this.isLoggedIn);
        return false;
      }
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
    this.router.navigate(['/signin']);
    console.log(this.users);
  }
  signUpData(user) {
    this.users.push(user);
    let index =0;
    for (const i in this.users) {
          index++
          user.id=index
     }
    
    console.log(this.users);
    return user;

  }
  getprofile() {
  return this.obj;
  }
  profileData(edit) {
    console.log(edit);
    for (const i in this.users) {
      if (this.users[i].id == edit.id) {
        this.users[i] = edit;
     }
    }
    this.obj = edit;
   this.getprofile();
  }
}
