import {Component, OnInit, SimpleChanges} from '@angular/core';
import {
  BookingClientService,
  ReservationTo,
} from "../../services/booking-client.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservations-add',
  templateUrl: './reservations-add.component.html',
  styleUrls: ['./reservations-add.component.css']
})

export class ReservationsAddComponent implements OnInit {

  allApartments: any;
  check: any;
  id: any;

  constructor(private bookingClientService: BookingClientService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookingClientService.getApartments().subscribe(value => {
      this.allApartments = value;
    })
  }


  addReservation(reservationDate: string, apartmentName: string, checkIn: string, checkOut: string, adults: string, children: string, smallChildren: string, guestName: string, guestCountry: string, moneyTransfer: string) {
    let reservationTo:  ReservationTo = {
      reservationCode: "unknown",
      apartment: apartmentName,
      checkIn: checkIn,
      checkOut: checkOut,
      stayDuration: 3,
      adults: Number(adults),
      children: Number(children),
      smallChildren: Number(smallChildren),
      guestName: guestName,
      guestCountry: guestCountry,
      reservationDate: reservationDate,
      moneyTransfer: Number(moneyTransfer)
    };

    this.bookingClientService.postReservation(reservationTo)
      .subscribe(r => {console.log(r)
      })

    this.check = "dodano rezerwację: " + "(" +
    reservationTo.reservationCode + ", " +
    reservationTo.apartment + ", " +
    reservationTo.checkIn + ", " +
    reservationTo.checkOut + ", " +
    reservationTo.stayDuration + ", " +
    reservationTo.adults + ", " +
    reservationTo.children + ", " +
    reservationTo.smallChildren + ", " +
    reservationTo.guestName + ", " +
    reservationTo.guestCountry + ", " +
    reservationTo.reservationDate + ", " +
    reservationTo.moneyTransfer + ")";
  }
}

