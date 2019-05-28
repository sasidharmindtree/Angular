import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   data:string
   message
  constructor() { }
  
  ngOnInit() {
    this.data="sasi"
  }
  getdata(evt){
    this.message=evt;

  }

}
