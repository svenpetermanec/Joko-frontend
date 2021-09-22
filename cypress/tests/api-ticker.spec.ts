import { Ticker } from '../../src/types/Ticker.type';
const apiTickers = `${Cypress.env('baseAPIUrl')}/ticker`;

describe('Ticker API', () => {
  let ctx: Ticker;

  context('POST /ticker', () => {
    it('Adds a new ticker', () => {
      cy.request('POST', `${apiTickers}`, {
        ticker: 'TSLA',
        quantity: 1,
        buyPrice: 150,
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.ticker).to.eq('TSLA');
        ctx = response.body;
      });
    });
  });

  context('DELETE /ticker/:ticker', () => {
    it('Deletes a ticker', () => {
      cy.request('DELETE', `${apiTickers}/${ctx.ticker}`).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
