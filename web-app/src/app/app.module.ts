import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MatSliderModule} from '@angular/material';

import { QuestionDetailsComponent } from './question/question-details/question-details.component';
import { QuestionListComponent } from './question/question-list/question-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailsComponent,
    QuestionListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
