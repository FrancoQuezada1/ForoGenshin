import { Component } from '@angular/core';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private AutoService: AutoService
    ){
    }
    
    email: string;
    password: string;
    
    signUp() {
    this.AutoService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
    
    signIn() {
    this.AutoService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
    
    signOut() {
    this.AutoService.SignOut();
    }
    
    }