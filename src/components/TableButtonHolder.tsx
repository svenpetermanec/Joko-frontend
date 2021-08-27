import { Box, Button } from '@chakra-ui/react';

interface Props {
  modalOpener: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TableButtonHolder = (props: Props) => {
  const { modalOpener } = props;

  return (
    <Box p={'10px'} textAlign={['right']} bg={'#363945'}>
      <Button bg='#2cd1a2' color='#363945' onClick={() => modalOpener(true)}>
        Add new
      </Button>
    </Box>
  );
};
