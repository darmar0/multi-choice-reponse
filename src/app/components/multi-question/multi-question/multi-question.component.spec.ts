import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiQuestionComponent } from './multi-question.component';

describe('MultiQuestionComponent', () => {
  let component: MultiQuestionComponent;
  let fixture: ComponentFixture<MultiQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should cccc', () => {
    expect(component).toBeTruthy();
  });
});
