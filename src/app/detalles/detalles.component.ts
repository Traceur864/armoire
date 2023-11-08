import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productosService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productoId = +params['id'];
      this.producto = this.productosService.getProducts().find(producto => producto.id === productoId);
    });
  }
}
