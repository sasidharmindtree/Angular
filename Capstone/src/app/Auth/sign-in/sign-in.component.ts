import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {User} from '../../shared/user.model'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  hide=true
  ngOnInit() {
      this.signinForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8), 
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { 
      return this.signinForm.controls; 
    }

  onSubmit() {
    console.log(this.signinForm)
      this.submitted = true;
      // stop here if form is invalid
      if (this.signinForm.invalid) {
          return;
      }
    
  }

}
