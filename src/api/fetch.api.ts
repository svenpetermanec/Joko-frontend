import axios from "axios";

export const getPrice = (symbol: string) => {
  return axios.get(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=44c0d89f5313410b9a132891d2313e9c`);
}