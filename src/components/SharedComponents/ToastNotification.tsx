import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

interface Props {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
}

export const ToastNotification = (props: Props) => {
  const { title, status = 'success' } = props;

  const toast = useToast();

  useEffect(() => {
    toast({
      title: title,
      status: status,
      position: 'top',
      variant: 'subtle',
      duration: 3000,
      isClosable: true,
    });
  });

  return <span />;
};
