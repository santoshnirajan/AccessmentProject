import { Pipe, PipeTransform } from '@angular/core';
import { Environment } from './environment/environment.service';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
constructor(private _currencyCode:Environment){

}
  transform(value: number) {
    return new Intl.NumberFormat('en-IN', {
      style:'currency',
      currency:this._currencyCode.currencyCode,
      minimumFractionDigits:2
    }).format(Number(value));
  }

}
