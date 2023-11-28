import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos = [
    { id: 1, nombre: 'Vestido amarillo y moño blanco', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { id: 2, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { id: 4, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { id: 5, nombre: 'Vestido amarillo y moño blanco', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { id: 6, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { id: 7, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { id: 8, nombre: 'Vestido amarillo y moño blanco', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { id: 9, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
    { id: 10, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa9.jpg' },
    { id: 11, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa1.jpg' },
    { id: 12, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa1.jpg' },
    { id: 13, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa2.jpg' },
    { id: 14, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa4.jpg' },
    { id: 15, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa5.jpg' },
    { id: 16, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/ropa6.jpg' },
    { id: 17, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/ropa7.jpg' },
    { id: 18, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/ropa8.jpg' },
  ];

  getProducts() {
    return this.productos;
  }
}
