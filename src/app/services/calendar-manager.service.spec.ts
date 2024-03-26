import { TestBed } from '@angular/core/testing';

import { CalendarManagerService } from './calendar-manager.service';

describe('CalendarManagerService', () => {
  let service: CalendarManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
