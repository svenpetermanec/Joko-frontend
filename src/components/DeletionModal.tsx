import { useState } from 'react';
import { ToastNotification } from '.';
import { deleteTicker } from './../api';
import { TickerProfit } from './../types';
import { Ticker } from '../types/Ticker.type';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';
interface Props {
  tickers: TickerProfit[];
  setTickers: React.Dispatch<React.SetStateAction<TickerProfit[]>>;
  modalOpen: any;
  setModalOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const DeletionModal = (props: Props) => {
  const { tickers, setTickers, modalOpen, setModalOpen } = props;

  const [toastNotification, setToastNotification] = useState<boolean>(false);

  const handleDeletion = async () => {
    await deleteTicker(modalOpen.ticker);
    setTickers(
      tickers.filter(
        (ticker: Ticker) => ticker.ticker !== modalOpen.ticker.ticker
      )
    );
    setToastNotification(true);
    setModalOpen({
      isOpen: false,
      ticker: null,
    });
    setToastNotification(false);
  };

  return (
    <Modal
      isOpen={modalOpen.isOpen}
      onClose={() => setModalOpen({ isOpen: false })}
    >
      <ModalContent bg='#2D2F39' color='white'>
        <ModalHeader>Delete entery</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this entery</Text>

          <Text>
            This action <b>cannot be reverted</b>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button bg='#db504a' color='white' onClick={handleDeletion}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>

      {toastNotification && (
        <ToastNotification title='Successfully deleted' status='success' />
      )}
    </Modal>
  );
};
