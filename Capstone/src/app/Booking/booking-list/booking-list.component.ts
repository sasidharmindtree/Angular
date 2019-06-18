import { Component, OnInit } from '@angular/core';
import{ EstablishmentService} from '../../Services/establishment.service'
import { FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor( private estServices:EstablishmentService,private formBuilder: FormBuilder) { }
  bookingList=[];
  sortForm: FormGroup;
  ngOnInit() {
    // .subscribe(data =>this.bookingList=data);
    this.estServices.establishmentSubject.subscribe(data=>{
      this.bookingList=data
      console.log(this.bookingList)
    });
    this.estServices.getEstablishment();
    //sort
    this.sortForm = this.formBuilder.group({
      averageRating: [1],
      price: [1000],
     
    });
    this.sortForm.valueChanges.subscribe(fromData => {
      this.estServices.getSort(fromData)
    })
  }
  ngOnDestroy(){
    this.estServices.establishmentSubject.unsubscribe()
  }
  rateValue(){
    console.log(this.sortForm.get('averageRating').value)
    this.sortForm.get('price').setValue(0)
    let num = this.sortForm.get('averageRating').value
    if(num === 0 || num === 2)
      this.sortForm.get('averageRating').setValue(1)
    else
    this.sortForm.get('averageRating').setValue(2)
  }
  priceValue(){
    this.sortForm.get('averageRating').setValue(0)
    let num = this.sortForm.get('price').value
    if(num === 0 || num === 2)
      this.sortForm.get('price').setValue(1)
    else
    this.sortForm.get('price').setValue(2)
  }
}
