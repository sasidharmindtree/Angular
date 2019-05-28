import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userName
  constructor() { }
  @Input() parent
  @Output() nameEvent = new EventEmitter<string>();

  ngOnInit() {
  }
  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

}
