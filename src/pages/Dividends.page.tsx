import React, { useState, useEffect } from 'react';
import { MainTable, TableButtonHolder, Loader, DividendModal  } from '..';
import { getAllDividends } from '../api/server.api';
import { DeletionModal } from '../DeletionModal';
import { DividendHeaders } from '../util/DividendHeadersUtil';

interface Props {}

export const Dividend = (props: Props) => {
  const [dividends, setDividends] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpener, setModalOpener] = useState<boolean>(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState({
    isOpen: false,
    dividned: null,
  });

  async function fetchData() {
    setIsLoading(true);
    const result = await getAllDividends();
    setDividends(result.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableButtonHolder modalOpener={setModalOpener} />

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

      {modalOpener && (
        <DividnedModal
          tickers={dividends}
          setTickers={setDividends}
          modalOpen={modalOpener}
          setModalOpen={setModalOpener}
        />
      )}

      {deletionModalOpen && (
        <DeletionModal
          tickers={dividends}
          setTickers={setDividends}
          modalOpen={deletionModalOpen}
          setModalOpen={setDeletionModalOpen}
        />
      )}
    </>
  );

};
