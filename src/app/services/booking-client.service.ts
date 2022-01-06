import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import { HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingClientService {

  ROOT = 'https://backvisitting.herokuapp.com';
  // ROOT = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  public getReservations(): Observable<Reservation>{
    return this.httpClient.get<Reservation>(this.ROOT + '/api/reservations');
  }

  public postReservation(reservation: ReservationTo): Observable<ReservationTo> {
    return this.httpClient.post<ReservationTo>(this.ROOT + '/api/reservations', reservation, httpOptions);
  }

  public getApartments(): Observable<Apartment>{
    return this.httpClient.get<Apartment>(this.ROOT + '/api/apartments');
  }

  public getPeoples(): Observable<People>{
    return this.httpClient.get<People>(this.ROOT + '/api/people');
  }

  public getCleaning(): Observable<Cleaning>{
    return this.httpClient.get<Cleaning>(this.ROOT + '/api/cleaning');
  }

}

export interface Apartment {
  id: number;
  apartmentName: string;
  airbnbLink: string;
  guestsNumber: number;
  address: string;
  size: number;
  reservations: any[];
  owner?: any;
}

export interface Reservation {
  id: number;
  reservationCode: string;
  apartment: Apartment;
  checkIn: string;
  checkOut: string;
  stayDuration: number;
  adults: number;
  children: number;
  smallChildren: number;
  guestName: string;
  guestCountry: string;
  reservationDate: string;
  moneyTransfer: number;
}

export interface ReservationTo {
  reservationCode: string;
  apartment: string;
  checkIn: string;
  checkOut: string;
  stayDuration: number;
  adults: number;
  children: number;
  smallChildren: number;
  guestName: string;
  guestCountry: string;
  reservationDate: string;
  moneyTransfer: number;
}

export interface People {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface User {
  id: number;
  people: People;
  login: string;
  password: string;
  userRole: string;
}

export interface Cleaning {
  id: number;
  reservation: Reservation;
  cleaningPerson: CleaningPerson;
  extraBedding: number;
  cleaningDate: string;
  done: boolean;
}

export interface CleaningPerson {
  id: number;
  people: People;
  workStart?: any;
  workEnd?: any;
  availabe: boolean;
}
