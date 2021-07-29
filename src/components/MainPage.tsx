import { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, TickerModal, Loader } from '.';
import { Symbol } from './../types';
import { getAllTickers } from '../api/server.api';

interface Props {}

export const MainPage = (props: Props) => {
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);

  async function fetchData() {
    setIsLoading(true);
    await getAllTickers().then(result => setSymbols(result.data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [setSymbols]);

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
