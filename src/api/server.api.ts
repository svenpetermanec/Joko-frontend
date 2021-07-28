import axios from 'axios';

import { BACKEND_DOMAIN } from './../api/apiUtil';

import { Ticker } from '../types';

export const postTicker = (ticker: Ticker) => {
    return axios.post(`${BACKEND_DOMAIN}/api/symbol/`, ticker);
}

export const getTicker = (ticker: string) => {
    return axios.get(`${BACKEND_DOMAIN}/api/symbol/` + ticker);
}

export const getPrice = (symbol: string) => {
    return axios.get(`${BACKEND_DOMAIN}/api/finnhub/` + symbol);
  };