import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../shared/user.model';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }
  hide = true;
  errormessge: string;
  ngOnInit() {
      this.signinForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() {return this.signinForm.controls; }
  onSubmit() {
    console.log(this.signinForm);
      this.submitted = true;
      // stop here if form is invalid
      if (this.signinForm.invalid) {
          return;
      }
      const login = this.auth.logIn(this.signinForm.value);
      if (login) {
        this.router.navigate(['/search']);
      } else {
        this.errormessge = 'invalid values';
      }
  }

}
