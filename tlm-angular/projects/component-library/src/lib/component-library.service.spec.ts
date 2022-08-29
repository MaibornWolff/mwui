import { TestBed } from '@angular/core/testing';

import { ComponentLibraryService } from './component-library.service';

describe('ComponentLibraryService', () => {
  let service: ComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
