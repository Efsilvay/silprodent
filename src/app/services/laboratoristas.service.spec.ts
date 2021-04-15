import { TestBed } from '@angular/core/testing';

import { LaboratoristasService } from './laboratoristas.service';

describe('LaboratoristasService', () => {
  let service: LaboratoristasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoristasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
