import axios from 'axios';

export const getPrice = (symbol: string) => {
  return axios.get(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=sandbox_c0h3pb748v6ttm1t1cl0`
  );
};
