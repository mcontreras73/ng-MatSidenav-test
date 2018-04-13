import { TestBed, inject } from '@angular/core/testing';

import { NavsService } from './navs.service';

describe('NavsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavsService]
    });
  });

  it('should be created', inject([NavsService], (service: NavsService) => {
    expect(service).toBeTruthy();
  }));
});
