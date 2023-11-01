import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  hilos: any[] = [];
  idContador: number = 1;

  obtenerHilos(): any[] {
    return this.hilos;
  }

  crearHilo(titulo: string, contenido: string, autor: string): void {
    const nuevoHilo = {
      id: this.idContador++,
      titulo,
      contenido,
      autor,
      respuestas: []
    };
    this.hilos.push(nuevoHilo);
  }

  agregarRespuesta(hiloId: number, respuesta: string, autor: string): void {
    const hilo = this.hilos.find((h) => h.id === hiloId);
    if (hilo) {
      hilo.respuestas.push({ respuesta, autor });
    }
  }

  obtenerHiloPorId(hiloId: number) {
    return this.hilos.find((h) => h.id === hiloId);
  }
  
  
}
