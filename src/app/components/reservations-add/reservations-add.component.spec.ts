import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAddComponent } from './reservations-add.component';

describe('ReservationsAddComponent', () => {
  let component: ReservationsAddComponent;
  let fixture: ComponentFixture<ReservationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
