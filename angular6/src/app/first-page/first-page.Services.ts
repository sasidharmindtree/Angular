//Services are injectable components.
// to build a service we need to import Injectable.
import { Injectable } from '@angular/core';
//decorate the class as @injectable().
// import {Http} from '@angular/http';
import { HttpClient } from "@angular/common/http"
import {Observable} from 'rxjs';
import 'rxjs';


@Injectable()
export class RegisterService{
    constructor(private http:HttpClient){

    }

    registerUser(data){
        return this.http.post("/api/users/createuser",data)
    }
    
}