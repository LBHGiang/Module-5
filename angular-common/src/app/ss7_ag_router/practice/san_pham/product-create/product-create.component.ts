import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product-service.service';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  message: string;

  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.save(product).subscribe(
      data => {
        this.message = 'Product saved successfully';
        this.productForm.reset();
      }, error => {
        this.message = 'Product saved failed';
      });
  }

  ngOnInit(): void {
    this.message = '';
    this.categoryService.findAll().subscribe(
      data => {
        this.categories = data;
      }, error => {
        this.message = 'Lỗi';
      }
    );
  }
}
