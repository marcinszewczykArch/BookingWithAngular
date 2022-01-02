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


  // form = this.fb.group({
  //   reservationDate: ["", [Validators.required, Validators.min(2)]],
  //    checkIn: ["", [Validators.required]],
  // });


  // onSubmit() {
  //   let r:  Reservation = {
  //     "id": 222,
  //     "reservationCode": "HMYKJ95JXN",
  //     "apartment": this.allApartments[1],
  //     "checkIn": "2021-11-10",
  //     "checkOut": "2021-11-13",
  //     "stayDuration": 3,
  //     "adults": 2,
  //     "children": 0,
  //     "smallChildren": 0,
  //     "guestName": "Magdalena",
  //     "guestCountry": "Poland",
  //     "reservationDate": "2021-10-21",
  //     "moneyTransfer": 111.1
  //   };
  //
  //   this.bookingClientService.postReservation(r);
  //   // this.bookingClientService.postReservation(this.form.value);
  // }

  test(): void {
    let r:  ReservationTo = {
      reservationCode: "HMYKJ95JXN",
      apartment: "Słoneczna kamienica - apartament z balkonem",
      checkIn: "2022-11-10",
      checkOut: "2022-11-13",
      stayDuration: 3,
      adults: 2,
      children: 0,
      smallChildren: 0,
      guestName: "Magdalena",
      guestCountry: "Poland",
      reservationDate: "2021-10-21",
      moneyTransfer: 111.1
    };


    this.bookingClientService.postReservation(r)
      .subscribe(r => {console.log(r)
      })

    this.check = "dodano rezerwację dla " + r.guestName;

  }
}

