import { Component, OnInit } from '@angular/core';
import {ValidationService } from '../validation.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = true;
  constructor( public fvalidator: ValidationService,public route:Router) {}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]),
      contactno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]")]),
      age:new FormControl('',[Validators.required,Validators.minLength(20),Validators.max(40)]),
      resume:new FormControl('',[Validators.required]),
      exp:new FormControl('',[Validators.pattern('[0-9]')]),
    },
    {
      validators : this.fvalidator.MatchPassword('password', 'confirmPassword'),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.route.navigateByUrl('/login',{state:[this.registerForm.get('name'),this.registerForm.get('email')]});
      console.table(this.registerForm.value);
    }
  }

}
