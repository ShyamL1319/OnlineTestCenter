export class Questions {

    constructor(public question: string, public ansOption1: string,
         public ansOption2 : string, public ansOption3: string, public ansOption4: string,
         public correctAnsOption : number){
        this.question = question;
        this.ansOption1 = ansOption1;
        this.ansOption2 = ansOption2;
        this.ansOption3 = ansOption3;
        this.ansOption4 = ansOption4;
        this.correctAnsOption = correctAnsOption;
    }
}
