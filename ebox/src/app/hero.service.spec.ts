import { TestBed, inject } from '@angular/core/testing';

import { HeroservicesService } from './hero.service';

describe('HeroservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroservicesService]
    });
  });

  it('should be created', inject([HeroservicesService], (service: HeroservicesService) => {
    expect(service).toBeTruthy();
  }));
});
