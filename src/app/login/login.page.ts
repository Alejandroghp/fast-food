import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

//async login() {
  //  try {
    //  const userCredential = await firebase.auth().signInWithEmailAndPassword(
      //  this.email,
      //  this.password
      //);
      // Inicio de sesión exitoso, redirige al usuario a otra página.
     // this.router.navigate(['/home']);
   // } catch (error) {
      // Maneja errores durante el inicio de sesión.
      //const errorCode = error.code;
     // const errorMessage = error.message;
      //console.error(`Error al iniciar sesión: ${errorCode} - ${errorMessage}`);
   // }
 //// }
}
