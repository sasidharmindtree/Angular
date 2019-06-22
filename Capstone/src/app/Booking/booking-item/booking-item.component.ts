import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() bookItem;

  ngOnInit() {
  }
  viewDetails(id) {
    console.log(id);
  }
}
