import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;

  constructor(private router: Router, private toastController: ToastController) {}

  iniciarSesion() {
    // Datos de inicio de sesión en bruto (por ejemplo)
    const usuarioCorrecto = 'usuario';
    const contrasenaCorrecta = 'contraseña';

    if (this.username === usuarioCorrecto && this.password === contrasenaCorrecta) {
      // Inicio de sesión exitoso, redirigir a otra página (por ejemplo, la página de inicio)
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      this.mostrarMensajeError('Credenciales incorrectas');
    }
  }

  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }
}
