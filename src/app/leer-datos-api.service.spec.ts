import { TestBed } from '@angular/core/testing';

import { LeerDatosApiService } from './leer-datos-api.service';

describe('LeerDatosApiService', () => {
  let service: LeerDatosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerDatosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
