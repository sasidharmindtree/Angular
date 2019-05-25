import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
@Input('parentData') public  dataName;
@Output() childEvent=new  EventEmitter();
data={
  name:'reddy'
}
  constructor() { }

  ngOnInit() {
  }
  openDialog(){;
    this.childEvent.emit(this.data)

  }

}
