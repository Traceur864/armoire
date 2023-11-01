import { Component } from '@angular/core';
import { ForoService } from '../service/foro.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  hilos: any[] = [];
  nuevoHilo: any = {};

  constructor(private foroService: ForoService) {
    this.hilos = this.foroService.obtenerHilos();
  }

  crearHilo() {
    this.foroService.crearHilo(this.nuevoHilo.titulo, this.nuevoHilo.contenido, this.nuevoHilo.autor);
    this.nuevoHilo = {}; // Limpia el formulario
  }

  agregarRespuesta(hiloId: number, respuesta: string) {
    this.foroService.agregarRespuesta(hiloId, respuesta, 'Usuario Anónimo'); // Puedes reemplazar 'Usuario Anónimo' con el nombre del usuario real
  }
}
