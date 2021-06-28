import { Box, Button } from '@chakra-ui/react'
import { ToastExample } from './ToastExample'
import { useState } from 'react'

interface Props {}

export const ToastTesting = (props: Props) => {
    const [toast, setToast] = useState(false);
    return(
    <Box>
      <Button onClick ={() => setToast(true)} />
        {toast && (
        <ToastExample status="error"/>
      )}
    </Box>
    );
}