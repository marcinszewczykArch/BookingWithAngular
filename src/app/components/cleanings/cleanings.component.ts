import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {BookingClientService} from "../../services/booking-client.service";

@Component({
  selector: 'app-cleanings',
  templateUrl: './cleanings.component.html',
  styleUrls: ['./cleanings.component.css']
})
export class CleaningsComponent implements OnInit {

  allReservations: any;
  allApartments: any;
  allCleanings: any;
  loadedReservationsAdd: any;
  loadedReservationsFilters: any;
  todayDate: any;
  daysBack: any;
  daysForward: any;
  dateBack: any;
  dateForward: any;
  futureDates: Array<string> = [];

  constructor(private bokingClientService: BookingClientService) {
  }

  ngOnInit(): void {
    this.bokingClientService.getReservations().subscribe(value => {
      this.allReservations = value;
    })
    this.bokingClientService.getApartments().subscribe(value => {
      this.allApartments = value;
    })
    this.bokingClientService.getCleaning().subscribe(value => {
      this.allCleanings = value;
    })

    this.todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.dateForward = formatDate('2022-02-22', 'yyyy-MM-dd', 'en');
  }


  backAndForward(back: string, forward: string) {
    this.daysBack = back;
    this.daysForward = forward;

    //future date limit
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Number(forward));
    this.dateForward = formatDate(futureDate, 'yyyy-MM-dd', 'en');

    //past date limit
    var pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - Number(back));
    this.dateBack = formatDate(pastDate, 'yyyy-MM-dd', 'en');

    //future dates array
    let x : number = 0;
    let dateAdded = this.dateForward;
    this.futureDates = [];

    while(x < Number(forward)) {
      x = x + 1;
      var futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + x);
      dateAdded = formatDate(futureDate, 'yyyy-MM-dd', 'en');
      this.futureDates.push(dateAdded);
    }

  }
}
