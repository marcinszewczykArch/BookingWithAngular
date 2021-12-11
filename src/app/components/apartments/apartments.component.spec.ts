import { ComponentFixture, TestBed } from '@angular/core/testing';

import { apartmentsComponent } from './apartments.component';

describe('apartmentsComponent', () => {
  let component: apartmentsComponent;
  let fixture: ComponentFixture<apartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ apartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(apartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
