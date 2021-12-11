import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getReservations(): Observable<Reservation>{
    return this.httpClient.get<Reservation>('http://localhost:8080/api/reservations');
  }

  public getApartments(): Observable<Apartment>{
    return this.httpClient.get<Apartment>('http://localhost:8080/api/apartments');
  }

  public getUsers(): Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080/api/users');
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

