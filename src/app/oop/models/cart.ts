import { Good } from './good';
import { Exchange } from '../../func/services/exchange-svc';
import * as _ from 'lodash';

export class Cart {

  constructor(private goods: Good[]) {}

  getTotalPrice(currency: string = 'US dollars'): number {
    const sum = _.sumBy(this.goods, (good) => good.amount);

    return Exchange.calc(sum, currency);
  }
}
