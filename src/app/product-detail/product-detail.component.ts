import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productId: number = 0;
  product: Product = new Product();
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
    this._route.paramMap.subscribe(
      params => {
        const idParam = params.get('id');
        if (idParam !== null) {
          this.productId = +idParam;
        }
      }
    );
    this.getSelectedProductDetail();
  }

  getSelectedProductDetail() {
    this._productService.getProductById(this.productId).subscribe(
      {
        next: (res: any) => {
          this.product = res;
        },
        error: (err) => {
          console.log("error", err);
        },
        complete: () => {
          console.log("Product Detailing Completed");
        }
      });
  }

}
