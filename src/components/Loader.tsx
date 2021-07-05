import React from 'react';

import { Center, Spinner } from '@chakra-ui/react';

interface Props {
  position: string;
  showBackdrop?: boolean;
}

export const Loader = (props: Props) => {
  const { position, showBackdrop } = props;

  return (
    <Center
      w="100%"
      h="100%"
      top="0"
      left="0"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#0082f0"
        size="xl"
      />
    </Center>
  );
};
