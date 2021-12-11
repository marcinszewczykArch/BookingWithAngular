import { TestBed } from '@angular/core/testing';

import { BookingClientService } from './booking-client.service';

describe('BookingClientService', () => {
  let service: BookingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
