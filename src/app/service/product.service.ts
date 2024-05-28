import { Injectable } from '@angular/core';
import { Environment } from '../environment/environment.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../model/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _environment: Environment,
    private _httpService: HttpClient) { }

  addProduct() {

  }

  getProducts(): Observable<any> {
    return this._httpService.get(this._environment.baserUrl);
  }
  getProductById(productId: number): Observable<any> {
    return this._httpService.get(`${this._environment.baserUrl}/` + productId);
  }

  editProduct(productId: number, productDetail: ProductDto): Observable<any> {
    return this._httpService.put(`${this._environment.baserUrl}/` + productId, productDetail);
  }
  searchProduct() {

  }
}
