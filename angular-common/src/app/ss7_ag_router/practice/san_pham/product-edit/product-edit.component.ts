import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  rfProduct: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductById(id);
    this.rfProduct = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name],
      price: [this.product.price],
      description: [this.product.description]
    });

    // this.rfProduct = new FormGroup({
    //   id: new FormControl(this.product.id),
    //   name: new FormControl(this.product.name),
    //   price: new FormControl(this.product.price),
    //   description: new FormControl(this.product.description),
    // });
  }

  onUpdate() {
    if (this.rfProduct.valid) {
      this.productService.updateProduct(this.rfProduct.value);
    }
  }
}
