import { TestBed } from '@angular/core/testing';

import { MwuiComponentLibraryService } from './mwui-component-library.service';

describe('MwuiComponentLibraryService', () => {
  let service: MwuiComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MwuiComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
