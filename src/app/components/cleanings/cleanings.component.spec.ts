import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningsComponent } from './cleanings.component';

describe('CleaningsComponent', () => {
  let component: CleaningsComponent;
  let fixture: ComponentFixture<CleaningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
