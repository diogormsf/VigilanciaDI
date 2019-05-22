import { TestBed } from '@angular/core/testing';

import { ConsIndisponibilidadeService } from './consindisponibilidade.service';

describe('IndisponibilidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsIndisponibilidadeService = TestBed.get(ConsIndisponibilidadeService);
    expect(service).toBeTruthy();
  });
});
