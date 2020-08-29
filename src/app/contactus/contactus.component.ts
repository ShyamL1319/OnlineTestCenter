import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 userDetails;
  constructor() {
    this.userDetails={
      userName : '',
      password : '',
      emailId : '',
      age : ''
    }
   }

  ngOnInit(): void {
  }
  registerationFormSubmitHandeler(): void{
  alert(`User Registered Successfully!`);

  }

}
