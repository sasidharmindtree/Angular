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

export class EstablishmentService {
 establishmentSubject = new Subject<Establishment[]>();
 establishmentArray: Establishment[] = [];
  reviews: Review[] = [];
  establishURL = 'https://api.myjson.com/bins/1g4yrl';
  filterData: Establishment[];
  searchData: Establishment[];
  fromValue = {};
  constructor(private http: HttpClient) { }
  getEstablishment() {
    this.establishmentSubject.next(this.searchData);
  }
  getFiter(fromData) {
  this.filterData = this.searchData.filter(word => word.price >= fromData.minValue);
      if (fromData.search !== '') {
        this.filterData = this.filterData.filter(word => word.name.toLowerCase() === fromData.search.toLowerCase());
      }
      // if(!fromData.averagerating)
      this.filterData = this.filterData.filter(word => word.averagerating >= fromData.averagerating);
      if (!fromData.hotel) {
        this.filterData = this.filterData.filter(word => word.type !== 'hotel');
      }
      if (!fromData.homestay) {
        this.filterData = this.filterData.filter(word => word.type !== 'homestay');
      }
      this.establishmentSubject.next(this.filterData);
  }
  getSort(sort) {
    this.filterData = this.searchData.filter(word => word.price >= sort.price);
    if (sort.averagerating) {
      if (sort.averagerating === 1) {
        this.filterData = this.filterData.sort((a, b) => a.averagerating - b.averagerating);
      }
    } else {
      this.filterData = this.filterData.sort((a, b) => b.averagerating - a.averagerating);
    }
    if (sort.price) {
       if (sort.price === 1) {
        this.filterData = this.filterData.sort((a, b) => a.price - b.price);
        } else {
          this.filterData = this.filterData.sort((a, b) => b.price - a.price);
        }
    }
    this.searchData = this.filterData;
    this.establishmentSubject.next(this.filterData);
}

getSearch(search) {
  this.fromValue = search;
  this.http.get(this.establishURL).subscribe((x: Establishment[]) => { this.establishmentArray = x;
  this.searchData = this.establishmentArray.filter(word => (word.city).toLowerCase() === (search.location).toLowerCase());
  this.searchData = this.searchData.filter(word => word.capacity >= search.capacity);
  this.establishmentSubject.next(this.searchData);
  });
}
getLocation() {
  return this.fromValue;
}
getEstablishmentById(id) {
  const viewData = this.establishmentArray.find(word => word.id === id);
  return viewData;
}
}
