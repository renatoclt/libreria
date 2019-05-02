import { TestBed } from '@angular/core/testing';

import { NgxRcltUtilitariosService } from './ngx-rclt-utilitarios.service';

describe('NgxRcltUtilitariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRcltUtilitariosService = TestBed.get(NgxRcltUtilitariosService);
    expect(service).toBeTruthy();
  });
});
