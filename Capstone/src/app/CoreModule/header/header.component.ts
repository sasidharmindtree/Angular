import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private auth: AuthService) { }
  ngOnInit() {
    this.auth.loginSubject.subscribe(data => {
      this.isLoggedIn = data;
    });
  }
}
