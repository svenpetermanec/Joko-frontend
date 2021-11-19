import { Ticker } from '../types';
import axiosClient from './axiosClient';

export const postTicker = (ticker: Ticker) => {
  return axiosClient.post('/ticker', ticker);
};

export const getAllTickers = () => {
  return axiosClient.get('/tickers');
};

export const deleteTicker = (ticker: Ticker) => {
  return axiosClient.delete(`/ticker/${ticker.ticker}`);
};

export const getAllDividends = () => {
  return axiosClient.get(`/dividned`);
};
