import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  slides = [
    { image: '/assets/img/carr1.jpg', title: 'Título 1' },
    { image: '/assets/img/carr2.jpg', title: 'Título 2' },
    { image: '/assets/img/carr3.jpg', title: 'Título 3' },
    { image: '/assets/img/carr4.jpg', title: 'Título 3' },
  ];
}
