import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product-service.service';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  message: string;

  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.findAll().subscribe(
      data => {
        this.products = data;
      }, error => {
        this.message = 'Lỗi';
      });
  }
}
