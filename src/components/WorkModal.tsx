import React from 'react';
import { WorkItem } from '../types/types';
import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

interface WorkModalProps{
    isOpen: boolean;
    onClose: () => void;
    data: WorkItem; 
}
const WorkModal = ({ isOpen, onClose, data }: WorkModalProps) => {
    if (!data.data) return null;  // data.data가 없으면 렌더링하지 않음

    return (
       <Box zIndex='1400' position='absolute'>
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
            <ModalOverlay bgColor='rgba(0,0,0,0.6)' />
            <ModalContent bgColor="#1b1b1e" borderRadius='10px'>
            <ModalHeader 
            w='100%' 
            // bgImage={data?.filename} 
            objectFit="cover" 
            overflow='hidden'
            m='0'
            p='0'
            position='relative'
            >
                
                {/* <Image src={data?.filename} w='100%' h='275px' m='0 auto' objectFit={'cover'} borderTopRadius='10px' /> */}
                <Box 
                h='50px'
                w='100%'
                left='0'
                position='absolute'
                bottom='0'
                zIndex='1000'
                bgGradient={'linear-gradient(0deg, #181818 -2.38%, rgba(0, 0, 0, 0.552275) 49.4%,  rgba(0, 0, 0, 0) 97.62%)'} 
                // bgGradient={'linear-gradient(0deg, #181818 -2.38%, rgba(0, 0, 0, 0.552275) 60.4%,  rgba(0, 0, 0, 0) 97.62%)'} 
                >
                </Box>
                

                
            </ModalHeader>
                    <ModalCloseButton color="black" zIndex="2" />
                    <ModalBody pt="2rem" pb={6} px="3rem" position='relative'>
                    <Box position='absolute' color='white' zIndex='1500' fontSize='4xl' h='10%' px="2rem" top='0' fontWeight='bold'>
                    {/* {data.data.korean_name} {data?.data.name} */}
                    </Box>
                        

                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default WorkModal;