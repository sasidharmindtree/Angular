import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit   {
  birthday = new Date();
  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };

  constructor() { }
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  ngOnInit() {
  }

}
