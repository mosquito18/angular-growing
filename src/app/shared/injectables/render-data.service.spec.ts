import { TestBed, inject } from '@angular/core/testing';

import { RenderDataService } from './render-data.service';

describe('RenderDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenderDataService]
    });
  });

  it('should be created', inject([RenderDataService], (service: RenderDataService) => {
    expect(service).toBeTruthy();
  }));
});
