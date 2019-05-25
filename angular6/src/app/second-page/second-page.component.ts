import { Component, OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';
  import {Router,NavigationExtras} from '@angular/router'
  import { from ,Subject} from 'rxjs';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit,OnDestroy {
  constructor(private router:Router) {
    console.log(`constructor`);
    let subject = new Subject<string>();

    subject.subscribe((data) => {
      console.log("Subscriber 1 got data >>>>> "+ data);
    });
    
    
    subject.next("Eureka");
  
  }
 
  onSelect(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "firstname": "Nic",
          "lastname": "Raboy",
          "age":28
      }
    };
    if(id==1)
    this.router.navigate(['/angular',id],navigationExtras)
    else
    this.router.navigate(['/node',id])
    

  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  data={
    name:'sasi'
  }
   message={};
}

