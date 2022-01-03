import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  BookingClientService,
  Cleaning,
  People,
  Reservation
} from "../../services/booking-client.service";

@Component({
  selector: 'app-cleanings',
  templateUrl: './cleanings.component.html',
  styleUrls: ['./cleanings.component.css']
})
export class CleaningsComponent implements OnInit {

  allReservations: any;
  allApartments: any;
  allCleanings: any;
  allPeoples: any;
  loadedReservationsAdd: any;
  loadedReservationsFilters: any;
  todayDate: any;
  daysBack: any;
  daysForward: any;
  dateBack: any;
  dateForward: any;
  futureDates: Array<string> = [];
  pastDates: Array<string> = [];

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
    this.bokingClientService.getPeoples().subscribe(value => {
      this.allPeoples = value;
    })

    this.todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.backAndForward(String(0), String(3));
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

    //past dates array
    x = Number(back);
    dateAdded = this.dateBack;
    this.pastDates = [];

    while(x > 0) {
      var backDate = new Date();
      backDate.setDate(backDate.getDate() - x);
      dateAdded = formatDate(backDate, 'yyyy-MM-dd', 'en');
      this.pastDates.push(dateAdded);
      x = x - 1;
    }

  }

  shouldNameBeDisplayed(people: People, date: string) : boolean {
    for (var cleaning of this.allCleanings) {
      let dateToCompare = formatDate(cleaning.cleaningDate, 'yyyy-MM-dd', 'en');
      let personToCompare = cleaning.cleaningPerson.people.firstName;

      if (dateToCompare == date && personToCompare == people.firstName) {
        return true;
      }
    }
    return false;
  }

  action1() {

  }

  action2() {

  }

  getWeekday(todayDate: string) : string {
    let arrayOfWeekdays = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
    let date = new Date(todayDate);
    let weekDayNumber = date.getDay();

    return arrayOfWeekdays[weekDayNumber];
  }

  daysBetweenDates(earlierDate: string, laterDate: string) : number {
    let date1 = new Date(earlierDate);
    let date2 = new Date(laterDate);
    return Math.ceil((date2.valueOf() - date1.valueOf()) / (1000 * 60 * 60 * 24));
  }

  nextReservation(cleaning: Cleaning) : Reservation {
    let checkOutDate = cleaning.reservation.checkOut;
    let futureReservations : Array<Reservation> = [];

    for (var reservation of this.allReservations) {
      if (reservation.checkIn >= checkOutDate){
        futureReservations.push(reservation)
      }
    }
    futureReservations.sort((x, y) => +new Date(x.checkIn) - +new Date(y.checkIn));
    return futureReservations[0];
  }

}
