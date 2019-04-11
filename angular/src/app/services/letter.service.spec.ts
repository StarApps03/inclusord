import { TestBed } from '@angular/core/testing';

import { LetterService } from './letter.service';

describe('LetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetterService = TestBed.get(LetterService);
    expect(service).toBeTruthy();
  });
});
