import { Box } from '@chakra-ui/react';
import { Home } from './components';

interface Props {}

export const App = (props: Props) => {
  return (
    <Box bg='#2D2F39' px={10} py={7} height='calc(100%-70px)'>
      <Home />
    </Box>
  );
};
