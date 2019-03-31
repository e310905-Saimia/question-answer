import { Component, OnInit } from '@angular/core';
import {QUESTIONS} from '../../../mock/mock-questions';
import {Question} from '../../../modules/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions = QUESTIONS;
  selectedQuestion: Question;
  constructor() {
   // this.questions = [];
  }

  ngOnInit() {
    // this.questions.push(new Question ( 110, 'Kysymys 101',  0,  10,  5, true,  false );
  }
  onSelect(question: Question): void {
    this.selectedQuestion = question;
    console.log(this.selectedQuestion);
  }
}
