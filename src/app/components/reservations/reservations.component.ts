import {Component, OnInit, SimpleChanges} from '@angular/core';
import {BookingClientService, Reservation} from "../../services/booking-client.service";

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

  delete() {
  }

  edit() {
  }

}
