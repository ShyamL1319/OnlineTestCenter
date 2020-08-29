import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 styleObject;
 priority;
 classObj:Object;

  constructor() { 
    this.styleObject={
      "background-color":"pink",
      "font-size":"36px",
      "border":"5px solid red"
    };
    this.priority="";
  }

  ngOnInit(): void {
  }
  changeStyle(){
    this.styleObject={
      "background-color":"black",
      "font-size":"36px",
      "color":"white",
      "border":"5px solid cyan"
    };

  }


}
