import { TestBed } from '@angular/core/testing';

import { NgxPvTableIndexService } from './ngx-pv-table-index.service';

describe('NgxPvTableIndexService', () => {
  let service: NgxPvTableIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPvTableIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
