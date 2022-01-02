import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFiltersComponent } from './reservations-filters.component';

describe('ReservationsFiltersComponent', () => {
  let component: ReservationsFiltersComponent;
  let fixture: ComponentFixture<ReservationsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
