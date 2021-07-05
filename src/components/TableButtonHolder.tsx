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
            bg={'rgb(252, 252, 252)'}
            boxShadow={'rgba(0, 0, 0, 0.25) 0px 2px 4px'}
            border={'1px solid rgba(0, 0, 0, 0.1)'}
            borderRadius={'5px'}
            >
            <Button onClick = {() => modalOpener(true)}>Add new</Button>
        </Box>
    );
    };