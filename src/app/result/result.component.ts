import { Component, OnInit } from '@angular/core';
import { ManageQuestionsService } from '../manage-questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result:number;
  usernam:string;
  finalScore:number;
  constructor(public manageQuestion:ManageQuestionsService) {
    this.finalScore = manageQuestion.calculateScore();

   }

  ngOnInit(): void {

    this.result = history.state[1];
    this.usernam = history.state[0];
  }

}
