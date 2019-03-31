import { Component, OnInit } from '@angular/core';
import { Question } from '../../../modules/question';
import {coerceNumberProperty} from '@angular/cdk/coercion';


// @ts-ignore
@Component({
  selector: 'app-question',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question: Question = {
    id: 1,
    title: 'Kysymys 1',
    minValue: 0,
    maxValue: 10,
    defaultValue: 5,
    showThumpLabel: true,
    disalbed: false,

  }



  constructor() {

  }

  ngOnInit() {
  }

}
