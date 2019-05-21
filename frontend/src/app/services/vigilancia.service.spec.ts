import { TestBed } from '@angular/core/testing';

import { VigilanciaService } from './vigilancia.service';

describe('VigilanciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VigilanciaService = TestBed.get(VigilanciaService);
    expect(service).toBeTruthy();
  });
});
