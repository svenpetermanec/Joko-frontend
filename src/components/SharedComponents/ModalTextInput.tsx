import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from 'react-hook-form';

import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

interface Props {
  placeholder: string;
  registerName: string;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const ModalTextInput = (props: Props) => {
  const { placeholder, registerName, register, errors } = props;
  return (
    <FormControl isInvalid={errors[registerName]} mt={3}>
      <FormLabel>{placeholder}</FormLabel>

      <Input
        placeholder={placeholder}
        {...register(registerName)}
        errors={errors}
      />

      <FormErrorMessage>{errors[registerName]?.message}</FormErrorMessage>
    </FormControl>
  );
};
