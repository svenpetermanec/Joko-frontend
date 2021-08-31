import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
interface Props {
  title: string;
  status?: 'info' | 'warning' | 'success' | 'error';
}

/**
 * @param title The title of the toast
 * @param status Status code
 * @returns A pop up notification that displays the given message and status. Displays a success toast by default.
 */

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
