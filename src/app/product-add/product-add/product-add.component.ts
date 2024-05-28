import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from '../../model/product.dto';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productId: number = 0;
  product: Product = new Product();
  productForm!: FormGroup

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _messageService: MessageService
  ) {
    let fb = this._formBuilder;
    this.productForm = fb.group<ProductDto>({
      name: this._formBuilder.nonNullable.control('', Validators.required),
      description: this._formBuilder.nonNullable.control('', Validators.required),
      price: this._formBuilder.nonNullable.control(0,[ Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  addProduct() {
    if (this.productForm.invalid) {
      return;
    }
    let productDetails = this.productForm.value;
    this._productService.addProduct(productDetails).subscribe(
      {
        next: (res: any) => {
          this._router.navigateByUrl("/products");
        },
        error: (err) => {
          this._messageService.add({ severity: 'error', key: 'br', summary: 'Error', detail: 'Unable to Add Product' })
        },
        complete: () => {
          console.log("Product Adding Completed");
        }
      }
    );
  }

}
