import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MultiQuestionService {
  public choicesSubject = new BehaviorSubject<any>(null);
  public choices$ = this.choicesSubject.asObservable();
  public questionSubject = new BehaviorSubject<any>(null);
  public question$ = this.questionSubject.asObservable();

  constructor() {
  }

  sendFormData(payload: any) {

    this.choicesSubject.next(payload.choices);
    this.questionSubject.next(payload.question)

  }


}
