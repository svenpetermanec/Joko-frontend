import { useToast } from "@chakra-ui/react"
import { useEffect } from 'react';

interface Props{
  title?: string,
  description?: string,
  status?: "info" | "warning" | "success" | "error",
}

 export const ToastExample = (props: Props) => {
   const {title, description, status = "success"} = props;
  const toast = useToast()

  useEffect(() => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    })
  })

  return (<span/>)
}