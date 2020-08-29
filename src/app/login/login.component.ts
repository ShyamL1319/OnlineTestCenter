import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username:string;
    email : string;

  registerForm = new FormGroup(
    {
    username : new FormControl("",[Validators.required,Validators.maxLength(15)]),
    email : new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)])
    }
  );

  constructor(public router:Router) 
  { 
         this.router=router;
  }

  submitEventHandeler(){
    console.log(this.registerForm.value,this.registerForm.status);
    if(this.registerForm.status != 'INVALID'){
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
