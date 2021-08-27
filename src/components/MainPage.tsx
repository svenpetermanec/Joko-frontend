import { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, TickerModal, Loader } from '.';
import { TickerProfit } from '../types';
import { getAllTickers } from '../api/server.api';
import { DeletionModal } from './DeletionModal';
import { MainPageHeaders } from '../util/MainPageUtil';

interface Props {}

export const MainPage = (props: Props) => {
  const [tickers, setTickers] = useState<TickerProfit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState({
    isOpen: false,
    ticker: null,
  });

  async function fetchData() {
    setIsLoading(true);
    await getAllTickers().then(result => setTickers(result.data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableButtonHolder modalOpener={setModalOpener} />

      {!isLoading && tickers.length !== 0 ? (
        <MainTable
          tickers={tickers}
          headers={MainPageHeaders}
          rowsAreDeletable={true}
          setDeletionModalOpen={setDeletionModalOpen}
        />
      ) : (
        <Loader />
      )}

      {modalOpener && (
        <TickerModal
          tickers={tickers}
          setTickers={setTickers}
          modalOpen={modalOpener}
          setModalOpen={setModalOpener}
        />
      )}

      {deletionModalOpen && (
        <DeletionModal
          tickers={tickers}
          setTickers={setTickers}
          modalOpen={deletionModalOpen}
          setModalOpen={setDeletionModalOpen}
        />
      )}
    </>
  );
};
