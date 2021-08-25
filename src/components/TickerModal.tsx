import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Ticker } from '../types';
import { ModalTextInput, ToastNotification, Loader } from '.';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { postTicker } from '../api';

interface Props {
  tickers: Ticker[];
  setTickers: React.Dispatch<React.SetStateAction<Ticker[]>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const tickerSchema = yup.object().shape({
  ticker: yup.string().required('Ticker is required'),
  quantity: yup
    .number()
    .required('Quantity is required')
    .typeError('Quantity must be a number'),
  buyPrice: yup
    .number()
    .required('Buy price is required')
    .typeError('Buy price must be a number'),
});

export const TickerModal = (props: Props) => {
  const { tickers, setTickers, modalOpen, setModalOpen } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastNotification, setToastNotification] = useState<boolean>(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(tickerSchema),
  });

  const onSubmit = async (values: Ticker) => {
    setIsLoading(true);
    await postTicker(values).then(res => setTickers([...tickers, res.data]))
    setIsLoading(false);
    setToastNotification(true);
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <ModalContent>
        <ModalHeader>Add new</ModalHeader>

        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <ModalTextInput
              isInvalid={errors.ticker ? true : false}
              placeholder='Ticker'
              registerName='ticker'
              register={register}
              errors={errors}
            />

            <ModalTextInput
              isInvalid={errors.quantity ? true : false}
              placeholder='Quantity'
              registerName='quantity'
              register={register}
              errors={errors}
            />

            <ModalTextInput
              isInvalid={errors.buyPrice ? true : false}
              placeholder='Buy price'
              registerName='buyPrice'
              register={register}
              errors={errors}
            />

            {isLoading && <Loader />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' type='submit'>Add</Button>
          </ModalFooter>
        </form>
      </ModalContent>

      {toastNotification && (
        <ToastNotification title='Successfully added' status='success' />
      )}
    </Modal>
  );
};
