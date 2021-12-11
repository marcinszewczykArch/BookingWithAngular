import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { apartmentsComponent } from './components/apartments/apartments.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { CleaningsComponent } from './components/cleanings/cleanings.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    apartmentsComponent,
    MenuComponent,
    ReservationsComponent,
    CleaningsComponent,
    MaintenanceComponent,
    AdminComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
