import { Component, OnInit } from '@angular/core';
import { UserService } from "./third-page.services";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
 data:any=[];
  search:any={};
  registerForm1: FormGroup;
  constructor(private router: Router,public thirdServices:UserService,private formBuilder: FormBuilder) {
    this.registerUser1();
  }
  
  registerUser1(){
    this.thirdServices.registerUser1(this.data).subscribe(res => {
      this.data=res
      console.log(this.data)
    });
  }
 
  
  ngOnInit() {

     
  }
  
}
