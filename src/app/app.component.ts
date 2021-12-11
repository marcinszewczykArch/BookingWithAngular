import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BookingWithAngular';
  log = 'w';
  pass = 'w';

  addCredentials(login: string, password: string) {
    this.log = login;
    this.pass = password;
  }

}
