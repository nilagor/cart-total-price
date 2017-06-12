export class Good {
  private price: number;

  constructor(data: {price: number}) {
    this.price = data.price;
  };

  get amount() {
    return this.price
  }
}
