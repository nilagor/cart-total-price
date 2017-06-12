const RATES = {
  rubles: 0.017511,
  euros: 1.12145,
  'US dollars': 1,
  pounds: 1.26993,
  yens: 0.009098,
};

const DEFAULT_CURR = 'US dollars';

export class Exchange {
  static calc(amount: number, currencyTo: string) {

    return amount / RATES[currencyTo];
  }
}
