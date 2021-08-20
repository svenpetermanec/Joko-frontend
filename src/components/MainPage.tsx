import { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, TickerModal, Loader } from '.';
import { Ticker } from './../types';
import { getAllTickers } from '../api/server.api';

interface Props {}

export const MainPage = (props: Props) => {
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);

  async function fetchData() {
    setIsLoading(true);
    await getAllTickers().then(result => setTickers(result.data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [setTickers]);

  return (
    <>
      <TableButtonHolder modalOpener={setModalOpener} />

      {!isLoading && tickers.length !== 0 ? (
        <MainTable tickers={tickers} />
      ) : (
        <Loader />
      )}

      {modalOpener && (
        <TickerModal modalOpen={modalOpener} setModalOpen={setModalOpener} />
      )}
    </>
  );
};
