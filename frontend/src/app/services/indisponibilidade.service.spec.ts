import { TestBed } from '@angular/core/testing';

import { IndisponibilidadeService } from './indisponibilidade.service';

describe('IndisponibilidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndisponibilidadeService = TestBed.get(IndisponibilidadeService);
    expect(service).toBeTruthy();
  });
});
