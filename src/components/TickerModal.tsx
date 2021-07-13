import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const tickerSchema = yup.object().shape({
  ticker: yup.string().required('prolazi yup'),
  quantity: yup.string().required('prolazi yup'),
  buyPrice: yup.string().required('prolazi yup'),
});

export const TickerModal = (props: Props) => {
  const { modalOpen, setModalOpen } = props;

  const {
    formState: { errors },
    register,
    handleSubmit,
  }= useForm({
    resolver: yupResolver(tickerSchema),
  });

  const onSubmit = (values:any) => {console.log(values)}

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <ModalContent>
        <ModalHeader>Add new</ModalHeader>

        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl
            isInvalid={errors.ticker ? true : false}
            >
              <FormLabel>Ticker</FormLabel>
              <Input
                my={3}
                placeholder='Ticker'
                {...register('ticker')}
                errors={errors}
              />
              <FormErrorMessage>{errors.ticker?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
            isInvalid={errors.quantity ? true : false}
            >
              <Input
              my={3}
              placeholder='Quantity'
              {...register('quantity')}
              errors={errors}
              />
              <FormErrorMessage>{errors.quantity?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
            isInvalid={errors.buyPrice ? true : false}
            >
              <Input
              my={3}
              placeholder='Buy price'
              {...register('buyPrice')}
              errors={errors}
              />
              <FormErrorMessage>{errors.buyPrice?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type='submit'>Add</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>  
  );
};
