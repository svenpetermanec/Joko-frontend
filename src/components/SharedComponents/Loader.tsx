import { Center, Spinner } from '@chakra-ui/react';
/**
 * Component used to display a spinner.
 */
export const Loader = () => {
  return (
    <Center w='100%' h='100%' top='0' left='0' pos='relative'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#2cd1a2'
        size='xl'
      />
    </Center>
  );
};
