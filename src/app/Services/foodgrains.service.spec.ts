import { TestBed } from '@angular/core/testing';

import { FoodgrainsService } from './foodgrains.service';

describe('FoodgrainsService', () => {
  let service: FoodgrainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodgrainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
