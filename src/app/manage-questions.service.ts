import { Injectable } from '@angular/core';
import {Questions} from './questions';

@Injectable()
export class ManageQuestionsService {
  questions: Questions [] = new Array();
  slectedAnswerArray :any []= new Array();

  constructor() { 
    this.questions.push(new Questions("Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was not one of them?","Tubby","Stodge","Helium Bat","Stumpy",3));
    this.questions.push(new Questions("Which was the 1st non Test playing country to beat India in an international match?","Canada","Sri Lanka","Zimbabwe","East Africa",2));
    this.questions.push(new Questions("Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?","2","3","4","8",3));
    this.questions.push(new Questions("Which county did Ravi Shastri play for?","Glamorgan","Leicestershire","Gloucestershire","Lancashire",1));
    this.questions.push(new Questions("Who was the first Indian to win the World Amateur Billiards title?","Geet Sethi","Wilson Jones","Michael Ferreira","Manoj Kothari",2));
    this.questions.push(new Questions("Who is the first Indian woman to win an Asian Games gold in 400m run?","M.L.Valsamma","P.T.Usha","Kamaljit Sandhu","K.Malleshwari",3));
    this.questions.push(new Questions("Which two counties did Kapil Dev play?","Northamptonshire & Worcestershire","Northamptonshire & Warwickshire","Nottinghamshire & Worcestershire","Nottinghamshire & Warwickshire",1));
    this.questions.push(new Questions("When was Amateur Athletics Federation of India established?","1936","1946","1956","1966",3));
    this.questions.push(new Questions("Who did Stone Cold Steve Austin wrestle at the 1998 edition of \"Over the Edge\"?","Cactus Jack","Mankind","Dude Love","Mick Foley",3));
    this.questions.push(new Questions("Ricky Ponting is also known as what?","The Rickster","Ponts","Ponter","Punter",4));
    this.questions.push(new Questions("How long are professional Golf Tour players allotted per shot?","45 seconds","25 seconds","1 minute","2 minutes",1));
    this.questions.push(new Questions("Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?","Baron Davis","Kevin Garnett","Stephon Maurbury","Reggie Miller",4));
    this.questions.push(new Questions("In the match between India and Pakistan at Jaipur on 02-10-1983, Which new rule was introduced?","Limit of overs was reduced to 50 overs","The rule of field restriction was taken.","Over throw runs were batsman's score","No-balls & wides were debited to bowlers analysis",4));
    this.questions.push(new Questions("The first hang gliders to be flown were flown in?","1600s","1700s","1800s","1900s",3));
    this.questions.push(new Questions("Which two counties did Anil Kumble play for?","Nottinghamshire & Lancashire","Nottinghamshire & Leicestershire","Northamptonshire & Leicestershire","Northamptonshire & Lancashire",3));
  }

  getAllQuestions():Questions[]{
    return this.questions;
  }

  getQuestionById(qID:number){
    return this.questions[qID];
    
}

  saveAnswers(qId:number,userAnswer:number){

    this.slectedAnswerArray.push({questionNumber:qId,userAnswer:userAnswer});
  }

  getAllAnswers(){
  
   return  this.slectedAnswerArray;
  }

  calculateScore(){
    var score=0;
   for(let i=1;i<=15; i++){
      if(this.questions[i].correctAnsOption === this.slectedAnswerArray[i].userAnswer){
        score+=1;
      }
    }
    return score;
  }


}