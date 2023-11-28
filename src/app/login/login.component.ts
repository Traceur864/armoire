// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService) {}

  iniciarSesion() {
    this.authService.login(this.usuario, this.contrasena).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
