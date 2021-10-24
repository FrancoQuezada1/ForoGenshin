import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: Observable<any[]>;
  password: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
     firestore.collection('email').add({email : "asd"});
  }
}