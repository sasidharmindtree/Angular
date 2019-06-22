import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstablishmentService } from '../../Services/establishment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private estServices: EstablishmentService, private router: Router) { }
  searchForm: FormGroup;
  guest = 1;
  ngOnInit() {
    const data1 = new Date ();
    this.searchForm = this.formBuilder.group({
      location: [''],
      date: [data1],
      capacity: [1]
    });
    this.searchForm.patchValue(this.estServices.getLocation());
  }
  getAdd() {
    this.searchForm.get('capacity').setValue(this.guest++);
  }
  onSubmit() {
      this.estServices.getSearch(this.searchForm.value);
      this.router.navigate(['/mybooking'])  ;
  }
}
