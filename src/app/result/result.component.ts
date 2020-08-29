import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result:number;
  usernam:string;

  constructor() { }

  ngOnInit(): void {

    this.result = history.state[1];
    this.usernam = history.state[0];
  }

}
