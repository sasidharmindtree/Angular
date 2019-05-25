import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http"
//Impor the service
import { RegisterService } from "./first-page.Services"
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  regObj:any={};
  constructor(private router: Router,private formBuilder: FormBuilder,private httpClient:HttpClient,private firstServices:RegisterService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         username: ['', Validators.required],
          lastName: ['', Validators.required],
          age: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]]
      });
     
       
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.regObj);
      this.submitted = true;
    //   // stop here if form is invalid
    //   if (this.registerForm.invalid) {
    //       return;
    //   }
    // sweet alert
      //  swal("Good job!", "You clicked the button!", "success");
      this.firstServices.registerUser(this.regObj).subscribe((res) => {
        swal("","","success",{title: "success",text: "Your successfully Created.",timer: 1000
          });
         this.router.navigateByUrl('/third-page');

      })

  }


}
