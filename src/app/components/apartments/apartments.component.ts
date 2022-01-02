import { Component, OnInit } from '@angular/core';
import {BookingClientService, Reservation} from "../../services/booking-client.service";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class apartmentsComponent implements OnInit {

  firstName: string;
  messageForUser: any;
  allReservations: any;
  allApartments: any;
  loadedMoreApartments: any;

  constructor(private bokingClientService: BookingClientService) {
    this.firstName = 'marcin';
  }

  ngOnInit(): void {
    this.bokingClientService.getReservations().subscribe(value => {
      this.allReservations = value;
    })
    this.bokingClientService.getApartments().subscribe(value => {
      this.allApartments = value;
    })
  }


  sayHello(value: string) {
    this.messageForUser = 'cześć ' + this.firstName + ' ' + value;
  }


  loadMyChildComponent() {
    this.loadedMoreApartments = true;
  }

}
