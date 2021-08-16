import { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, TickerModal, Loader } from '.';
import { Symbol } from './../types';
import { getAllTickers } from '../api/server.api';
import { DeletionModal } from './DeletionModal';

interface Props {}

export const MainPage = (props: Props) => {
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState({
    isOpen: false,
    ticker: null,
  });

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
        <MainTable
        symbols={symbols}
        rowsAreDeletable={true}
        setDeletionModalOpen={setDeletionModalOpen}
        />
      ) : (
        <Loader />
      )}

      {modalOpener && (
        <TickerModal modalOpen={modalOpener} setModalOpen={setModalOpener} />
      )}

      {deletionModalOpen && (
        <DeletionModal modalOpen={deletionModalOpen} setModalOpen={setDeletionModalOpen} />
      )}
    </>
  );
};
