import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstablishmentService } from '../../Services/establishment.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Establishment } from 'src/app/shared/establishment.model';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent implements OnInit {
constructor(private formBuilder: FormBuilder,
  private estServices: EstablishmentService, private router: Router, private route: ActivatedRoute) { }
  DateForm: FormGroup;
  bookingView: Establishment;
  count = 1;
  minDate;
  numbers = [];
  ngOnInit() {
    this.DateForm = this.formBuilder.group({
      date: [''],
      todate: ['' , Validators.required]
    });
    this.route.params.subscribe(params => {
     this.bookingView = this.estServices.getEstablishmentById(+params.id);
         console.log(this.bookingView);
    });
     this.DateForm.patchValue(this.estServices.getLocation());
     this.minDate = new Date();
     this.minDate.setDate(this.minDate.getDate() + 1 );
     this.DateForm.get('todate').setValue(this.minDate);
    console.log(this.minDate);
     this.DateForm.valueChanges.subscribe(dates => {
      this.minDate = new Date(dates.date);
      this.minDate.setDate(this.minDate.getDate() + 1 );
      // this.DateForm.get('todate').setValue(this.minDate)
      console.log(this.minDate);
       const f = new Date(dates.date);
       const t = new Date(dates.todate);
       const s = f.getDate();
       const e = t.getDate();
       this.count = e - s;
    });
  }
}
