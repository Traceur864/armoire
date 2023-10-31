import { Component } from '@angular/core';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  productos = [
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa9.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa9.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa9.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
    { nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa9.jpg' },
  ];

  filtroSeccion = 'ropa';
  filtroBusqueda = '';

  filtrarProductos() {
    this.filtroSeccion = (document.getElementById('filtroSecciones') as HTMLSelectElement).value;
    this.filtroBusqueda = (document.getElementById('inputBuscador') as HTMLInputElement).value.toLowerCase();
  }
}
