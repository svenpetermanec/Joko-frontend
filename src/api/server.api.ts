import axios from 'axios';

import { BACKEND_DOMAIN } from './../api/apiUtil';

import { Ticker } from '../types';

export const postTicker = (ticker: Ticker) => {
  return axios.post(`${BACKEND_DOMAIN}/ticker`, ticker);
};

export const getAllTickers = () => {
  return axios.get(`${BACKEND_DOMAIN}/tickers`);
};

export const deleteTicker = (ticker: Ticker) => {
  return axios.delete(`${BACKEND_DOMAIN}/ticker/${ticker.ticker}`);
};
