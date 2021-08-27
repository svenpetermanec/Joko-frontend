import { Box, Button } from '@chakra-ui/react';

interface Props {
  modalOpener: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TableButtonHolder = (props: Props) => {
  const { modalOpener } = props;

  return (
    <Box
      p={'10px'}
      textAlign={['right']}
      bg={'#363945'}
      boxShadow={'rgba(0, 0, 0, 0.25) 0px 2px 4px'}
      border={'1px solid rgba(0, 0, 0, 0.1)'}
    >
      <Button bg='#21ce99' color='#363945' onClick={() => modalOpener(true)}>
        Add new
      </Button>
    </Box>
  );
};
