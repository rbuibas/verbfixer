import { TestBed, inject } from '@angular/core/testing';

import { VerbHandlerService } from './verb-handler.service';

describe('VerbHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerbHandlerService]
    });
  });

  it('should be created', inject([VerbHandlerService], (service: VerbHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
