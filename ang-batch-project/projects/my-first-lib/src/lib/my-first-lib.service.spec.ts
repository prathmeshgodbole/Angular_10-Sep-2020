import { TestBed } from '@angular/core/testing';

import { MyFirstLibService } from './my-first-lib.service';

describe('MyFirstLibService', () => {
  let service: MyFirstLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
