import { TestBed } from '@angular/core/testing';

import { MultiQuestionService } from './multi-question.service';

describe('MultiQuestionService', () => {
  let service: MultiQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
