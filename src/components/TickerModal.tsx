//import { useForm } from 'react-hook-form'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'

interface Props {
    ModalOpen: any;
    setModalOpen: any;
}

const handleSubmit = () => {
    console.log("test");
}

export const TickerModal = (props: Props) => {
    const { ModalOpen, setModalOpen } = props;
    return (
        <Modal
        isOpen={ ModalOpen }
        onClose={() => setModalOpen(false)}
        >
            <ModalContent>
                <ModalHeader>Add new</ModalHeader>

                <ModalCloseButton/>
                <form onSubmit={handleSubmit}>
                <ModalBody>
                    <Input my={3} placeholder={'Ticker'}></Input>
                    <Input my={3} placeholder={'Quantity'}></Input>
                    <Input my={3} placeholder={'Buy price'}></Input>
                </ModalBody>

                <ModalFooter>
                    <Button type="submit">Dodaj</Button>
                </ModalFooter>
                </form>

            </ModalContent>
        </Modal>
    );
};