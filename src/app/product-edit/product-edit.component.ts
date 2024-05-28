import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDto } from '../model/product.dto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  productId: number = 0;
  product: Product = new Product();
  productForm!: FormGroup

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    let fb = this._formBuilder;
    this.productForm = fb.group<ProductDto>({
      name: this._formBuilder.nonNullable.control('', Validators.required),
      description: this._formBuilder.nonNullable.control('', Validators.required),
      price: this._formBuilder.nonNullable.control(0, Validators.required)
    });
    this._route.paramMap.subscribe(
      params => {
        const idParam = params.get('id');
        if (idParam !== null) {
          this.productId = +idParam;
        }
      }
    );
    this.getSelectedProduct();
  }

  getSelectedProduct() {
    this._productService.getProductById(this.productId).subscribe(
      {
        next: (res: any) => {
          this.product = res;
          this.productForm.patchValue(this.product);
        },
        error: (err) => {
          console.log("error", err);
        },
        complete: () => {
          console.log("Product Detailing Completed");
        }
      });
  }
  updateProduct() {
    let productDetails = this.productForm.value;
    this._productService.editProduct(this.productId, productDetails).subscribe(
      {
        next: (res: any) => {
          this._router.navigateByUrl("/products");
        },
        error: (err) => {
          console.log("error", err);
        },
        complete: () => {
          console.log("Product Detailing Completed");
        }
      }
    );
  }
}
