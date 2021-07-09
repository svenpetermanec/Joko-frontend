import { Box, Button } from '@chakra-ui/react';
//import { ToastExample } from '.'
import { useState } from 'react';

interface Props {}

export const ToastTesting = (props: Props) => {
  const [toast, setToast] = useState<boolean>(false);

  return(
    <Box>
      <Button onClick ={() => setToast(true)}/>
        {toast && (
        //<ToastExample status='error'/><
        <span/>
      )}
    </Box>
  );
};