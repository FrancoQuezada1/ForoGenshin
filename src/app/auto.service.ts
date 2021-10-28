 import { AngularFireAuth } from "@angular/fire/auth";
 import { Observable } from 'rxjs';
 ​
 export class AutoService {
 userData: Observable<firebas.User>;
 
 constructor(private angularFireAuth: AngularFireAuth) {
 this.userData = angularFireAuth.authState;
 }
 
 /* Sign up */
 SignUp(email: string, password: string) {
 this.angularFireAuth
 .auth
 .createUserWithEmailAndPassword(email, password)
 .then(res => {
 console.log('Te logueaste sin problemas', res);
 })
 .catch(error => {
 console.log('Ocurrio un error, verifica que los datos sean correctos', error.message);
 });
 }
 
 /* Sign in */
 SignIn(email: string, password: string) {
 this.angularFireAuth
 .auth
 .signInWithEmailAndPassword(email, password)
 .then(res => {
 console.log('You're in!');
 })
 .catch(err => {
 console.log('Ocurrio un error:',err.message);
 });
 }
 
 /* Sign out */
 SignOut() {
 this.angularFireAuth
 .auth
 .signOut();
 }
}
