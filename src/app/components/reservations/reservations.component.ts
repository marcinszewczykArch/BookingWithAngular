import { Component, OnInit } from '@angular/core';
import {BookingClientService} from "../../services/booking-client.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  allReservations: any;
  allApartments: any;
  loaded: any;

  constructor(private bokingClientService: BookingClientService) {
  }


  ngOnInit(): void {
    this.bokingClientService.getReservations().subscribe(value => {
      this.allReservations = value;
    })
    this.bokingClientService.getApartments().subscribe(value => {
      this.allApartments = value;
    })
  }

}
