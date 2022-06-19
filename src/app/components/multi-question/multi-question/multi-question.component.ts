import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-multi-question',
  templateUrl: './multi-question.component.html',
  styleUrls: ['./multi-question.component.scss']
})

export class MultiQuestionComponent implements OnInit {

  choices = ["Multiple-choices", "Multiple-response"]
  selected: any;
  constructor(public fb: FormBuilder) {
  }

  choiceForm: FormGroup = this.fb.group({
    type: this.fb.control(this.choices[0])
  })

  ngOnInit(): void {
   this.selected =  this.choiceForm.get("type")?.value;
  }

  onGetChoice() {
   this.selected = this.choiceForm.get("type")?.value
  }
}
