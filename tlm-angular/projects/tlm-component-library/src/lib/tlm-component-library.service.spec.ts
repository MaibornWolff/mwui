import { TestBed } from '@angular/core/testing';

import { TlmComponentLibraryService } from './tlm-component-library.service';

describe('TlmComponentLibraryService', () => {
  let service: TlmComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TlmComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
