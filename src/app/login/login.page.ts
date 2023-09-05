import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Verifica si las credenciales coinciden con el usuario específico.
    if (this.username === 'ped.guzman@duocuc.cl' && this.password === '1234') {
      // Las credenciales son válidas, redirige al usuario a la página de inicio.
      this.router.navigate(['/inicio']); // Ajusta la ruta según tu estructura de navegación.
    } else {
      // Las credenciales son inválidas, muestra un mensaje de error al usuario.
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}
