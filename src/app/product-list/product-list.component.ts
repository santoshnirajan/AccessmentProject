import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SearchService } from '../product-search-service/search-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  items: MenuItem[] = [];
  productId: number = 0;
  searchTerm: string = '';
  clonedProducts: Product[] = [];
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _searchService: SearchService
  ) {
    this.items =
      [
        {
          icon: PrimeIcons.EYE,
          tooltipOptions: {
            tooltipLabel: "View Product",
            tooltipPosition: "top"
          },
          command: () => {
            this.viewProduct();
          }
        },
        {
          icon: PrimeIcons.PENCIL,
          tooltipOptions: {
            tooltipLabel: "Edit Product",
            tooltipPosition: "top"
          },
          command: () => {
            this.editProduct();
          }
        }]
  }
  ngOnInit(): void {
    this._searchService.getSearchTerm().subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      if (this.searchTerm === "") {
        this.listProducts();
      }
      else {
        this.products = this.clonedProducts.slice();
        this.products = this.products.filter(x => x.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    });
  }


  onRowClick(productId: number) {
    this.productId = productId;
  }
  viewProduct() {
    this._router.navigateByUrl(`/products/${this.productId}`);
  }

  editProduct() {
    this._router.navigateByUrl(`/products/${this.productId}/edit`);
  }

  listProducts() {
    this._productService.getProducts().subscribe(
      {
        next: (res: any) => {
          this.products = res;
        },
        error: (err) => {
          console.log("error", err);
        },
        complete: () => {
          this.clonedProducts = this.products.slice();
        }
      });
  }
}
