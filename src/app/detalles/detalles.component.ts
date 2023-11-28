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
  likes: number = 120;
  loves: number = 20;
  dislikes: number = 60;

  constructor(private route: ActivatedRoute, private productosService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productoId = +params['id'];
      this.producto = this.productosService.getProducts().find(producto => producto.id === productoId);
    });
  }

  handleLikeClick() {
    this.likes++;
  }

  handleLoveClick() {
    this.loves++;
  }

  handleDislikeClick() {
    this.dislikes++;
  }
}
