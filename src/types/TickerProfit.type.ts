import { Ticker } from './index';

export type TickerProfit = Ticker & {
  price: number;
  profit: number;
  percentage: number;
  total: number;
};
