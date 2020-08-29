import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // userName:string;
  // lastName:string;
  username:string;
  email:string;
  constructor(public router:Router,public activatedRouter:ActivatedRoute) { 
    this.router = router;
    // this.userName = "Shyam Lal";
    // this.lastName = "Chauhan";
    // this.email= this.router.getCurrentNavigation().extras.state[1];
    // this.username = this.router.getCurrentNavigation().extras.state[0];
  }

  ngOnInit(): void {
    this.email= history.state[1];
    this.username = history.state[0];
  }
  startTestHandeler(){
     this.router.navigateByUrl('/starttest/'+ 1,{state:[this.username,this.email]});
  }
  // changeEventHandeler(e){
  //   this.userName = e.target.value;
  //   console.log(`Change Event ${this.userName}`);
  // }
  // inputEventHandeler(e){
  //   this.userName = e.target.value;
  //   console.log(`Input Event ${this.userName}`);
  // }
}
