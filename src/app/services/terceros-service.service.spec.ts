import { TestBed } from '@angular/core/testing';

import { TercerosServiceService } from './terceros-service.service';

describe('TercerosServiceService', () => {
  let service: TercerosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercerosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
