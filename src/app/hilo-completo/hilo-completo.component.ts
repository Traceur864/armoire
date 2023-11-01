import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForoService } from '../service/foro.service';


@Component({
  selector: 'app-hilo-completo',
  templateUrl: './hilo-completo.component.html',
  styleUrls: ['./hilo-completo.component.css']
})
export class HiloCompletoComponent implements OnInit {
  hilo: any;

  constructor(private route: ActivatedRoute, private servicio: ForoService) {}

 ngOnInit() {
  this.route.paramMap.subscribe((params) => {
    const idParam = params.get('id');
    if (idParam !== null) {
      const hiloId = +idParam; // Convierte el ID a número
      this.cargarHilo(hiloId);
    } else {
      // Manejar el caso en el que 'id' no se encuentra en la URL
    }
  });
  
  }
  cargarHilo(hiloId: number) {
    this.hilo = this.servicio.obtenerHiloPorId(hiloId); // Debes implementar esta función en tu servicio
  }
}
