import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  public nodejs;
  color: string;
  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };
  myDate=new Date();
  value12345: any = 12345;
  constructor(private route:ActivatedRoute) { 
   
  }
 

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'))
    this.nodejs=id;
  }

}
