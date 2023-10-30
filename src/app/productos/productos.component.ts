import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    // Agrega más productos según sea necesario
  ];

  filtroSeccion = 'ropa';
  filtroBusqueda = '';

  filtrarProductos() {
    this.filtroSeccion = (document.getElementById('filtroSecciones') as HTMLSelectElement).value;
    this.filtroBusqueda = (document.getElementById('inputBuscador') as HTMLInputElement).value.toLowerCase();
  }
}
