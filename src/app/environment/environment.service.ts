import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Environment {
  type: string = "Development";

  baserUrl: string = "https://66556dc93c1d3b60293971ec.mockapi.io/api/product";
  currencyCode:string="USD"
}
