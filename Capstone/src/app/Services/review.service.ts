import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import { Establishment } from '../shared/establishment.model';
import { User } from '../shared/user.model';
import { Review } from '../shared/review.model';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../shared/booking.model';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  bookHistory: Booking[] = [
    {booked_by: new User('sasi'), establishment: new Establishment('Green city', 4, 5000, ['Car', 'FreeWifi']), checkindate: new Date('6/19/2019'),
    checkoutdate: new Date('6/20/2019'), noofperson: 2, cost: 200},
    {booked_by: new User('Reddy'), establishment: new Establishment('Green city', 3, 2000, ['Car', 'FreeWifi']), checkindate: new Date('6/21/2019'),
    checkoutdate: new Date('6/27/2019'), noofperson: 2, cost: 200},
    {booked_by: new User('p'), establishment: new Establishment('Green city', 2, 4000, ['Car']), checkindate: new Date('6/21/2019'),
    checkoutdate: new Date('6/22/2019'), noofperson: 2, cost : 200}
];
  constructor() { }
  getHistory() {
    return of(this.bookHistory);
  }
}
