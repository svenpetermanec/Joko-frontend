//TODO: switch to react-hook-form
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleSubmit = () => {
  console.log('test');
};

export const TickerModal = (props: Props) => {
  const { modalOpen, setModalOpen } = props;

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <ModalContent>
        <ModalHeader>Add new</ModalHeader>

        <ModalCloseButton />

        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Input my={3} placeholder={'Ticker'} />

            <Input my={3} placeholder={'Quantity'} />

            <Input my={3} placeholder={'Buy price'} />
          </ModalBody>

          <ModalFooter>
            <Button type='submit'>Add</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
