import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {User} from '../../shared/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  obj:User
  hide=true
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        phoneNumber: ['', [Validators.required, Validators.required,Validators.pattern('[0-9]{10}')]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8), 
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { 
      return this.signupForm.controls; 
    }

    onSubmit() {
    console.log(this.signupForm)
      this.submitted = true;
      this.obj=this.signupForm.value;
      // stop here if form is invalid
      if (this.signupForm.invalid) {
          return;
      }
    
  }
}
