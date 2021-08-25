import { useState } from 'react';
import { ToastNotification } from '.';
import { deleteTicker } from '../api/server.api';

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
  modalOpen: any;
  setModalOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const DeletionModal = (props: Props) => {
  const { modalOpen, setModalOpen } = props;

  const [toastNotification, setToastNotification] = useState<boolean>(false);

  const handleDeletion = async () => {
    await deleteTicker(modalOpen.ticker);
    setToastNotification(true);
    setModalOpen({
      isOpen: false,
      ticker: null,
    });
  };

  return (
    <Modal
      isOpen={modalOpen.isOpen}
      onClose={() => setModalOpen({ isOpen: false })}
    >
      <ModalContent>
        <ModalHeader>Delete entery</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this entery</Text>

          <Text>
            This action <b>cannot be reverted</b>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='red' onClick={handleDeletion}>
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
