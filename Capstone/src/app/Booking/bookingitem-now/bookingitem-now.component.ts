import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../Services/review.service';
import { Establishment } from 'src/app/shared/establishment.model';
import { Booking } from 'src/app/shared/booking.model';

@Component({
  selector: 'app-bookingitem-now',
  templateUrl: './bookingitem-now.component.html',
  styleUrls: ['./bookingitem-now.component.css']
})
export class BookingitemNowComponent implements OnInit {

  constructor(private reviewServices: ReviewService, private router: Router, private route: ActivatedRoute ) { }
  history: Booking[];
  checkIn = [];
  checkOut = [];
  ngOnInit() {
    this.reviewServices.getHistory().subscribe(data => {
      this.history = data;
      const date = new Date();
      for (const s of this.history) {
        if (s.checkindate < date && s.checkoutdate < date) {
          this.checkIn.push(s);
        } else {
          this.checkOut.push(s);
        }
      }
    });
  }
}
