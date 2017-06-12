import { Component } from '@angular/core';
import { Good } from './models/good';
import { Cart } from './models/cart';
import * as _ from 'lodash';

@Component({
  selector: 'oop',
  styleUrls: ['./oop.component.scss'],
  template: require('./oop.component.pug')
})
export class OopComponent {
  private selectedCart = [
    {price: 20},
    {price: 45},
    {price: 67},
    {price: 1305}
  ];

  private cart: Cart;

  ngOnInit() {
    const goods = _.map(this.selectedCart, (good) => new Good(good));
    this.cart = new Cart(goods);
  }

  get input(): any {
    return this.selectedCart;
  }

  get output(): any {
    return this.totalCartPrice;
  }

  get totalCartPrice(): ICartPrices {
    return {
      rubles: this.cart.getTotalPrice('rubles'),
      euros: this.cart.getTotalPrice('euros'),
      'US dollars': this.cart.getTotalPrice('US dollars'),
      pounds: this.cart.getTotalPrice('pounds'),
      yens: this.cart.getTotalPrice('yens')
    }
  }
}

interface ICartPrices {
  rubles: number;
  euros: number;
  'US dollars': number;
  pounds: number;
  yens: number;
}
