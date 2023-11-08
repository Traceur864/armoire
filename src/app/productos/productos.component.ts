import { Component } from '@angular/core';
import { ProductService } from '../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  productos: any[] = []; // Define el tipo como un array de objetos o inicialízalo como un array vacío
  filtroSeccion = 'todos';
  filtroBusqueda = '';

  constructor(private productService: ProductService) {
    this.productos = this.productService.getProducts();
  }

  filtrarProductos() {
    // Tu lógica de filtro aquí sigue siendo válida
    this.filtroSeccion = (document.getElementById('filtroSecciones') as HTMLSelectElement).value;
    this.filtroBusqueda = (document.getElementById('inputBuscador') as HTMLInputElement).value.toLowerCase();
  }
}