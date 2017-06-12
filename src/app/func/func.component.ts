import { Component } from '@angular/core';
import { Exchange } from './services/exchange-svc';
import * as _ from 'lodash';

@Component({
  selector: 'func',
  styleUrls: ['./func.component.scss'],
  template: require('./func.component.pug')
})
export class FuncComponent {
  private selectedCart = [
    {price: 20},
    {price: 45},
    {price: 67},
    {price: 1305}
  ];
  private totalCartPrice;
  private currencies: string[] = ['rubles', 'euros', 'US dollars', 'pounds', 'yens'];

  ngOnInit() {
    // sumBy can be replaced by _.reduce(cart, (sum, good) => sum + good.price, 0)
    // but it's more difficult to read and understand

    this.totalCartPrice = this.calcTotalPrice(this.currencies, _.sumBy(this.selectedCart, 'price'));
  }

  get input(): any {
    return this.selectedCart;
  }

  get output(): any {
    return this.totalCartPrice;
  }

  calcTotalPrice(currencies: string[], price: number) {
    return _.reduce(currencies, (memo, currency) => {
      memo[currency] = Exchange.calc(price, currency);
      return memo;
    }, {});
  }
}
