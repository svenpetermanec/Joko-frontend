import { Center, Spinner } from '@chakra-ui/react';

interface Props {}

export const Loader = (props: Props) => {
  return (
    <Center w='100%' h='100%' top='0' left='0' pos='relative'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#21ce99'
        size='xl'
      />
    </Center>
  );
};
