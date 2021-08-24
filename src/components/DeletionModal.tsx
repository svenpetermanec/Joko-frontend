// import { useState } from 'react';
// import { Ticker } from '../types';
// import { ToastNotification, Loader } from '.';


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

  //const [isLoading, setIsLoading] = useState<boolean>(false);
  //const [toastNotification, setToastNotification] = useState<boolean>(false);

  const handleDeletion = async () => {
    //deleteTicker(modalOpen.ticker)
    setModalOpen({
        isOpen: false,
        ticker: null,
      });
      console.log(modalOpen.ticker)
    //toast
  };
  
  return (
    <Modal isOpen={modalOpen.isOpen} onClose={() => setModalOpen({isOpen: false})}>
      <ModalContent>
        <ModalHeader>Delete entery</ModalHeader>

        <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this entery</Text>

            <Text>
            This action <b>cannot be reverted</b>
            </Text>

            {/* {isLoading && <Loader />} */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' onClick={handleDeletion}>Delete</Button>
          </ModalFooter>
      </ModalContent>

      {/* {toastNotification && (
        <ToastNotification title='Successfully added' status='success' />
      )} */}
    </Modal>
  );
};
