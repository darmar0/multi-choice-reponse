import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MultiQuestionComponent} from "./components/multi-question/multi-question/multi-question.component";

const routes: Routes = [{path: "", component: MultiQuestionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
