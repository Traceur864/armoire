import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarMensaje() {
    // Aquí puedes agregar lógica para enviar el mensaje
    // Por ejemplo, puedes imprimir los valores de nombre, correo y mensaje en la consola
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Mensaje:', this.mensaje);
  }
}
