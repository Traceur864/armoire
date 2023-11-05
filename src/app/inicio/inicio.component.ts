import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [NgbCarouselConfig]
})
export class InicioComponent {
  slides = [
    { image: '/assets/img/carr1.jpg', title: 'Título 1' },
    { image: '/assets/img/carr2.jpg', title: 'Título 2' },
    { image: '/assets/img/carr3.jpg', title: 'Título 3' },
    { image: '/assets/img/carr4.jpg', title: 'Título 4' },
  ];

  constructor(config: NgbCarouselConfig) {
    // Configura opciones del carrusel (si es necesario)
    config.interval = 2000; // Cambia la velocidad de cambio de diapositivas
    config.wrap = true; // Activa el ciclo continuo del carrusel
    config.keyboard = true; // Habilita el control del carrusel mediante el teclado
  }
} 