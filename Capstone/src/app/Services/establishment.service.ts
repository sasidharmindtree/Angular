import { Injectable } from '@angular/core';
 import {Observable,of, Subject} from 'rxjs'
import { Establishment } from '../shared/establishment.model';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})

export class EstablishmentService {
   
establishmentArray : Establishment[]= [
  { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 5000, isBlock: false, averageRating: 4.2, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
  { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1 , price: 6000, isBlock: false, averageRating: 4.4, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Air-conditioned"], owner: new User() },
  { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
  { id: 4, name: "Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews: [],bookingList: [],amenities: [ "Air-conditioned", "First Aid" , "Wi-fi"], owner: new User() },
  { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned"], owner: new User() },
  { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User() },
  { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: [],bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User() },
  { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
  { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: [],bookingList: [],amenities: [ "Car parking"], owner: new User() },
  { id: 10, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Bangalore", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User() },
  { id: 11, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Bangalore", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: [],bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User() },
  { id: 12, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Bangalore", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
  ]
  filterData:Establishment[];
  searchData:Establishment[]
  fromValue={}
  constructor() { }
  getEstablishment(){
    this.establishmentSubject.next(this.searchData);
  }
  establishmentSubject=new Subject<Establishment[]>()
  getFiter(fromData){
  console.log(fromData)
  this.filterData = this.establishmentArray.filter(word =>word.price >=fromData.minValue);
  console.log(this.filterData)
      if(fromData.search!=="")
      this.filterData = this.filterData.filter(word =>word.name === fromData.search);
      console.log(this.filterData);
      //if(!fromData.averageRating)
      this.filterData = this.filterData.filter(word =>word.averageRating >=fromData.averageRating);
      console.log(this.filterData);
      if(!fromData.hotel)
      this.filterData = this.filterData.filter(word =>word.type !== "hotel");
      if(!fromData.homestay)
      this.filterData = this.filterData.filter(word =>word.type !== "homestay");
      console.log(this.filterData)
      this.establishmentSubject.next(this.filterData)
  }
  getSort(sort){
    console.log(sort);
    this.filterData = this.establishmentArray.filter(word =>word.price >=sort.price);
    if(sort.averageRating)
      if(sort.averageRating==1)
        this.filterData=this.filterData.sort((a, b) => a.averageRating - b.averageRating);
      else
      this.filterData=this.filterData.sort((a, b) => b.averageRating - a.averageRating);
      if(sort.price)
      if(sort.price==1)
        this.filterData=this.filterData.sort((a, b) => a.price - b.price);
      else
      this.filterData=this.filterData.sort((a, b) => b.price - a.price);

    this.establishmentSubject.next(this.filterData)
}

getSearch(search){
  console.log(search)
  this.fromValue=search
  this.searchData = this.establishmentArray.filter(word =>(word.city).trim() ===(search.location).trim());
  this.searchData = this.searchData.filter(word =>word.capacity >=search.capacity);
  console.log(this.searchData)
  this.establishmentSubject.next(this.searchData) 
}
getLocation(){
  return this.fromValue
}
}
