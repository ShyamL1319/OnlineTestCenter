import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName} from '@angular/forms';
import {ageValidator} from '../ageValidation';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {
    
  registerForm= new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    userId:new FormControl("",[Validators.required,Validators.pattern('/^SL/')]),
    phoneNumber:new FormControl("",[Validators.required,Validators.pattern("/\d"),Validators.maxLength(10)]),
    age: new FormControl("",ageValidator)
  });

  constructor() {
   }

  ngOnInit(): void {
  }
  submitEventHandeler(){
  console.log(this.registerForm.value);
  }
}
