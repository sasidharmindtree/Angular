import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  title = 'Tour of Heroes';
  myHero:Hero;
  values = '';
  value="";
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }
  changeName(hero){
    this.myHero=hero;
  }
  ngOnInit() {
    this.changeName(this.heroes[0])
  }
  onKey(event: any) { 
    this.values += event.target.value + ' | ';
  }
  onKey1(value: any) { 
    this.value += value + ' | ';
  }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

}
