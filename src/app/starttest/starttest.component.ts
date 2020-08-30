import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Questions} from '../questions';
import { FormControl, FormGroup } from '@angular/forms';
import {ManageQuestionsService} from '../manage-questions.service';
@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {

  questions:Questions[]=new Array();
  username :string;
  email : string;
  resultScore:number;
  currentQuestionNumber:number;
  selectedOption:string;
  theRadioSelectedOption:number;
  score:number;
  slectedOptionArray: any[] = new Array();
  testFormGroup=new FormGroup({
    exampleRadios:new FormControl("")
  });

  constructor(public activatedRouter:ActivatedRoute, public router:Router, public manageQuestion: ManageQuestionsService) {
    this.questions = manageQuestion.getAllQuestions();
    this.router = router;
    this.activatedRouter = activatedRouter;
   this.currentQuestionNumber = (1+parseInt(this.activatedRouter.snapshot.params["qN"]));
    this.selectedOption="";
    this.theRadioSelectedOption = -1;
    this.score=0;

    this.testFormGroup.controls['exampleRadios'].valueChanges.subscribe((state: any) => {
      // console.log(`Value Selected by form ${state}`);
    });
    this.email= this.router.getCurrentNavigation().extras.state[1];
    this.username = this.router.getCurrentNavigation().extras.state[0];
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      // console.log(params["qN"]);
      this.currentQuestionNumber = parseInt(params["qN"]);
    });
    this.email= history.state[1];
    this.username = history.state[0];
  }

  previousQuestionHandeler(){
      this.currentQuestionNumber = (parseInt(this.activatedRouter.snapshot.params["qN"])-1);
      this.router.navigateByUrl('/starttest/'+ this.currentQuestionNumber);     
      // console.log(this.currentQuestionNumber);
  }
  nextQuestionHandeler(){
      //  console.log("Selected Answer : "+this.theRadioSelectedOption);
      this.slectedOptionArray.push(this.theRadioSelectedOption);
      this.manageQuestion.saveAnswers(this.currentQuestionNumber,this.theRadioSelectedOption);
      this.currentQuestionNumber = (1+parseInt(this.activatedRouter.snapshot.params["qN"]));
      this.router.navigateByUrl('/starttest/'+ this.currentQuestionNumber);
      this.theRadioSelectedOption = -1;
      // console.log(this.currentQuestionNumber);
  }
  answeredOptionChangeHandeler(ans: string, no: number){
       this.selectedOption = ans;
       this.theRadioSelectedOption = no;
      //  console.log(this.theRadioSelectedOption, this.selectedOption);
      

  }
  submitTestHandeler(){
    this.slectedOptionArray.push(this.theRadioSelectedOption);
    this.manageQuestion.saveAnswers(this.currentQuestionNumber,this.theRadioSelectedOption);
    this.manageQuestion.getAllAnswers();
    this.calculateScore();
    // alert(`here is your score : ${this.score}`);
    this.router.navigateByUrl('/result', {state: [this.username, this.score] });
  }

  calculateScore():void{
    this.score =0;
     for(var i=0; i < this.questions.length; i++){
          if(this.slectedOptionArray[i] == (this.questions[i].correctAnsOption)){
            this.score+=1;
          }
     }
  }
}
