import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {MultiQuestionService} from "../multi-question.service";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  type: any;

  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  @Input('type') set setType(type: any) {
    this.type = type;
  }
  constructor(public fb: FormBuilder,
              public service: MultiQuestionService
  ) {
  }

  responseForm: FormGroup = this.fb.group({
    question: this.fb.control(''),
    choices: this.fb.array([]),
  })

  ngOnInit(): void {
    this.formSubscribe();

  }

  ngOnDestroy() {
    this.destroy$.next(true);

  }
  choices(): FormArray {
    return this.responseForm.get("choices") as FormArray
  }


  drop(event: CdkDragDrop<string[]>) {
    const formArray = this.choices();
    const from = event.previousIndex;
    const to = event.currentIndex;
    this.moveItemInFormArray(formArray, from, to);
  }

  moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    const from = this.clamp(fromIndex, formArray.length - 1);
    const to = this.clamp(toIndex, formArray.length - 1);

    if (from === to) {
      return;
    }

    const previous = formArray.at(from);
    const current = formArray.at(to);
    formArray.setControl(to, previous);
    formArray.setControl(from, current);
  }


  formSubscribe() {
    this.responseForm.valueChanges.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe(value => {
      this.service.sendFormData(value);
    });
  }

  newChoice() {
    const choices = this.responseForm.get("choices") as FormArray;
    let newControl;
    newControl = this.fb.group({
      choice: this.fb.control(''),
    });

    choices?.push(newControl);
    setTimeout(() => {
      document.getElementById('choice' + (choices?.length - 1))?.focus();
    }, 500);

  }

  deleteChoice(i: any) {
    this.choices().removeAt(i);

  }
}
