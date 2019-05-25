import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router'

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public anularId;
  public firstname: string;
  public lastname: string;
  public age:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'))
    // this.anularId=id
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id=parseInt(params.get('id'))
      this.anularId=id
      

    })
    this.route.queryParams.subscribe(params => {
      this.firstname = params["firstname"];
      this.lastname = params["lastname"];
      this.age = params["age"];
      console.log(this.firstname,this.lastname,this.age)
  });
  }
  getBackbutton(){
  this.router.navigate(['/second-page'])
  }
  overviewbutton(){
    this.router.navigate(['/overview'])

  }

}
