import { Component, OnInit, OnDestroy } from '@angular/core';
import { EstablishmentService} from '../../Services/establishment.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit, OnDestroy {

  constructor( private estServices: EstablishmentService, private formBuilder: FormBuilder) { }
  bookingList = [];
  sortForm: FormGroup;
  subscription: Subscription;
  ngOnInit() {
    // .subscribe(data =>this.bookingList=data);
    this.subscription = this.estServices.establishmentSubject.subscribe(data => {
      this.bookingList = data;
      console.log(this.bookingList);
    });
    this.estServices.getEstablishment();
    // sort
    this.sortForm = this.formBuilder.group({
      averagerating: [1],
      price: [1000],
    });
    this.sortForm.valueChanges.subscribe(fromData => {
      this.estServices.getSort(fromData);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  rateValue() {
    console.log(this.sortForm.get('averagerating').value);
    this.sortForm.get('price').setValue(0);
    const num = this.sortForm.get('averagerating').value;
    if (num === 0 || num === 2) {
      this.sortForm.get('averagerating').setValue(1);
    } else {
      this.sortForm.get('averagerating').setValue(2);
    }
  }
  priceValue() {
    this.sortForm.get('averagerating').setValue(0);
    const num = this.sortForm.get('price').value;
    if (num === 0 || num === 2) {
      this.sortForm.get('price').setValue(1);
    } else {
      this.sortForm.get('price').setValue(2);
    }
  }
}
