import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    email: string;
    password :string;
    validationService:ValidationService;
  loginForm = new FormGroup(
    {
    username : new FormControl( "", [Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z0-9.]*$')]),
    email : new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')])
    },
  );

  constructor(public router:Router) 
  { 
         this.router = router;
         this.validationService = new ValidationService();
  }

  submitEventHandeler(): void{
    console.log(this.loginForm.value,this.loginForm.status);
    if(this.loginForm.status != 'INVALID'){
      this.router.navigateByUrl('/home',{state:[ this.username,this.email]});
    }else{
      alert('Please Enter Complete and Correct Details');
    }

    }
  ngOnInit(): void 
  {
   this.username =  history.state[0];
   this.email = history.state[1];
  }

}
