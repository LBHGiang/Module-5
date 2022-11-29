import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {Product} from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  message: string;

  rfProduct: FormGroup | undefined;

  categories: Category[];

  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(
      data => {
        this.categories = data;
      }, error => {
        this.message = 'Lỗi';
      }
    );
    const id = +this.activatedRoute.snapshot.params.id;
    this.productService.findById(id).subscribe(
      product => {
        this.product = product;
        this.rfProduct = this.formBuilder.group({
          id: [product.id],
          name: [product.name],
          price: [product.price],
          category: [product.category],
          description: [product.description]
        });
      }, error => {
        this.message = 'Không tìm thấy sản phẩm';
      }
    );
  }

  onUpdate() {
    if (this.rfProduct.valid) {
      this.productService.update(this.rfProduct.value).subscribe(
        data => {
          this.router.navigateByUrl('/product/list');
        }, error => {
          this.message = 'Product saved failed';
        });
    }
  }
}
