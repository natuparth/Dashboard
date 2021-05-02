import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-topnav]',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  countries = [{
    "name": "ENG",
    "icon": "../../assets/flags/england.png"
  },
  {
    "name": "CAN",
    "icon": "../../assets/flags/canada.png"
  },
  {
    "name": "AUS",
    "icon": "../../assets/flags/australia.png"
  }]
  selectedCountry = this.countries[0];
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeCountry(i){
     if(i>0)
      {
        this.index = this.index + i > 2 ? 0 : (this.index + i)
        this.selectedCountry = this.countries[this.index];
      }
      else{
        this.index = this.index + i < 0 ? 2 : (this.index + i)
        this.selectedCountry = this.countries[this.index];
      }
  }
}
