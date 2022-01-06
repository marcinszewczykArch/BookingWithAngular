import {Component, OnInit, SimpleChanges} from '@angular/core';
import {BookingClientService, Reservation} from "../../services/booking-client.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  allReservations: any;
  allApartments: any;
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

    this.todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.backAndForward(String(0), String(3));
  }

  loadReservationsAdd() {
    if (!this.loadedReservationsAdd){
      this.loadedReservationsAdd = true
      this.loadedReservationsFilters = false
    } else {
      this.loadedReservationsAdd = false
    }
  }

  loadReservationsFilters() {
    if (!this.loadedReservationsFilters){
      this.loadedReservationsFilters = true
      this.loadedReservationsAdd = false
    } else {
      this.loadedReservationsFilters = false
    }
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

  getWeekday(todayDate: string) : string {
    let arrayOfWeekdays = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
    let date = new Date(todayDate);
    let weekDayNumber = date.getDay();

    return arrayOfWeekdays[weekDayNumber];
  }

  delete() {
  }

  edit() {
  }

  action1() {
  }
}
