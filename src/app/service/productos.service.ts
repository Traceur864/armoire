import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos = [
    { id: 1, nombre: 'Chaqueta azul', seccion: 'ropa', imagen: '/assets/img/img1.png' },
    { id: 2, nombre: 'Conjunto negro', seccion: 'accesorios', imagen: '/assets/img/img2.png' },
    { id: 3, nombre: 'Sueter deportivo', seccion: 'ropa', imagen: '/assets/img/img18.png'},
    { id: 4, nombre: 'Deportivo', seccion: 'ropa', imagen: '/assets/img/img3.png' },
    { id: 5, nombre: 'Camisa azul', seccion: 'ropa', imagen: '/assets/img/img4.png' },
    { id: 6, nombre: 'Camisa roja con manga larga', seccion: 'accesorios', imagen: '/assets/img/img5.png' },
    { id: 7, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/img6.png' },
    { id: 8, nombre: 'Vestido amarillo y moño blanco', seccion: 'ropa', imagen: '/assets/img/img7.png' },
    { id: 9, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img8.png' },
    { id: 10, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/img9.png' },
    { id: 11, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/img10.png' },
    { id: 12, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img11.png' },
    { id: 13, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/img12.png' },
    { id: 14, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/img13.png' },
    { id: 15, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img14.png' },
    { id: 16, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/img15.png' },
    { id: 17, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/img16.png' },
    { id: 18, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img17.png' },
    { id: 19, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/img19.png' },
    { id: 20, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img20.png' },
    { id: 21, nombre: 'Producto 3', seccion: 'ropa', imagen: '/assets/img/img21.png' },
    { id: 22, nombre: 'Producto 1', seccion: 'ropa', imagen: '/assets/img/img22.png' },
    { id: 23, nombre: 'Producto 2', seccion: 'accesorios', imagen: '/assets/img/img23.png' },
  ];

  getProducts() {
    return this.productos;
  }
}
