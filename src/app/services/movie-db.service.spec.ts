import { TestBed } from '@angular/core/testing';

import { MovieDbService } from './movie-db.service';

describe('MovieDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieDbService = TestBed.get(MovieDbService);
    expect(service).toBeTruthy();
  });
});
