import { Routes } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent}
  ,{path:'login',component:LoginComponent}
  ,{path:'signup',component:SignupComponent}
];
