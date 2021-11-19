import React, { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, Loader } from '../components';
import { getAllDividends } from '../api/server.api';
import { DividendHeaders } from '../util/DividendHeadersUtil';
import { Dividend } from '../types';
import { DeletionModal } from '../components/DeletionModal';

interface Props {}

export const Dividends = (props: Props) => {
  const [dividends, setDividends] = useState<Dividend[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [modalOpener, setModalOpener] = useState(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState({
    isOpen: false,
    ticker: null,
  });

  async function fetchData() {
    setIsLoading(true);
    const { data } = await getAllDividends();
    setDividends(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <TableButtonHolder modalOpener={setModalOpener} /> */}

      {!isLoading && dividends.length !== 0 ? (
        <MainTable
          tickers={dividends}
          headers={DividendHeaders}
          rowsAreDeletable={true}
          setDeletionModalOpen={setDeletionModalOpen}
        />
      ) : (
        <Loader />
      )}

      {/* {modalOpener && (
        <DividnedModal
          tickers={dividends}
          setTickers={setDividends}
          modalOpen={modalOpener}
          setModalOpen={setModalOpener}
        />
      )} */}

      {/* {deletionModalOpen && (
        <DeletionModal
          tickers={dividends}
          setTickers={setDividends}
          modalOpen={deletionModalOpen}
          setModalOpen={setDeletionModalOpen}
        />
      )} */}
    </>
  );
};
