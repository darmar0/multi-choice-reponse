import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MultiQuestionService} from "../multi-question.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  type: any;
  responses = false;
  choices$ = this.service.choices$;
  question$ = this.service.question$
  @Input('type') set setType(type: any) {
    setTimeout(()=>{
      this.type = type;
    })


  }

  constructor(public fb: FormBuilder,
              public service: MultiQuestionService
  ) {
  }

  choiceForm: FormGroup = this.fb.group({
    choices: this.fb.array([]),
  })

  ngOnInit(): void {
  }

}
