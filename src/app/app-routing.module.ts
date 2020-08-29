import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StarttestComponent } from './starttest/starttest.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'starttest/:qN', component: StarttestComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path : 'signup', component :SignupComponent},
  {path: 'home', component: HomeComponent},
  {path:"result",component: ResultComponent},
  {path: "", redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
