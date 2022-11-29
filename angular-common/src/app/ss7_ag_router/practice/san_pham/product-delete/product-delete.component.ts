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

  message: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this.productService.findById(id).subscribe(product => {
      this.product = product;
    }, error => {
      this.message = 'Không tìm thấy sản phẩm';
    });
  }

  deleteProduct() {
    this.productService.remove(this.product).subscribe(
      data => {
        this.router.navigateByUrl('/product/list');
      }, error => {
        this.message = 'Xoá sản phẩm bị lỗi';
      }
    );
  }
}
