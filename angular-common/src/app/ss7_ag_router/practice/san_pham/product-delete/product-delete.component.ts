import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductById(id);
    console.log(this.product);
  }

  deleteProduct() {
    this.productService.removeProduct(this.product.id);
    this.router.navigateByUrl('/product/list');
  }
}
