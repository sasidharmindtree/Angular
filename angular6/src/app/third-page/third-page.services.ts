// to build a service we need to import Injectable.
import { Injectable } from '@angular/core';
//decorate the class as @injectable().
// import {Http} from '@angular/http';
import { HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs';



@Injectable()
export class UserService{
    constructor(private http:HttpClient){
    } 
    registerUser1(data):Observable<any>{
     return this.http.get("/api/user/products",data)
       
    }
  
    searchMethods(username): Observable<any>{
        console.log(username);
        return this.http.post("/api/user/products",{
            params: {id:username}})  

    }
   
}