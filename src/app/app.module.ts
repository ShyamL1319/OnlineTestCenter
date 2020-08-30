import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarttestComponent } from './starttest/starttest.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';
import {ManageQuestionsService} from './manage-questions.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarttestComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    SignupComponent,
    ReactiveFormExampleComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ManageQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
