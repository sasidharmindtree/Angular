import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../Services/establishment.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private estServices: EstablishmentService) { }
  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      averageRating: [1],
      minValue: [1000],
      maxValue: [10000],
      hotel: [true],
      homestay: [true],
      search: ['']


    });
    this.filterForm.valueChanges.subscribe(fromData => {
      this.estServices.getFiter(fromData)
    })
  }

  setRating(star: number) {
    this.filterForm.get('averageRating').setValue(star)

  }
  
}
