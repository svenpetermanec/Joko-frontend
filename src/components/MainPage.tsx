import { getPrice } from '../api';
import { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, TickerModal, Loader } from '.';
import { Symbol } from './../types';

interface Props {}

export const MainPage = (props: Props) => {
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);

  async function fetchData(ticker: string) {
    setIsLoading(true);
    await getPrice(ticker).then(result => setSymbols(result.data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData('TSLA');
  }, []);

  return (
    <>
      <TableButtonHolder modalOpener={setModalOpener} />

      {!isLoading && symbols.length !== 0 ? (
        <MainTable symbols={symbols} />
      ) : (
        <Loader />
      )}

      {modalOpener && (
        <TickerModal modalOpen={modalOpener} setModalOpen={setModalOpener} />
      )}
    </>
  );
};
