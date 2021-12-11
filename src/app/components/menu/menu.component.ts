import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loadedApartments: any;
  loadedReservations: any;
  loadedCleanings: any;
  loadedMaintenance: any;
  loadedAdmin: any;

  constructor() { }

  ngOnInit(): void {
  }


  loadApartments() {
    this.loadedApartments = true;
    this.loadedReservations = false;
    this.loadedCleanings = false
    this.loadedMaintenance = false;
    this.loadedAdmin = false;
  }

  loadReservations() {
    this.loadedReservations = true;
    this.loadedApartments = false;
    this.loadedCleanings = false
    this.loadedMaintenance = false;
    this.loadedAdmin = false;
  }

  loadCleanings() {
    this.loadedCleanings = true
    this.loadedReservations = false;
    this.loadedApartments = false;
    this.loadedMaintenance = false;
    this.loadedAdmin = false;
  }

  loadMaintenance() {
    this.loadedMaintenance = true;
    this.loadedCleanings = false
    this.loadedReservations = false;
    this.loadedApartments = false;
    this.loadedAdmin = false;
  }

  loadAdmin() {
    this.loadedAdmin = true;
    this.loadedCleanings = false
    this.loadedReservations = false;
    this.loadedApartments = false;
    this.loadedMaintenance = false;
  }



}
