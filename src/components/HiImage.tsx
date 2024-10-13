import { Box, Image } from '@chakra-ui/react';
import minsunHi from '../assets/img/minsunHi.png';
import React from 'react';

const HiImage = () => {
    return (
        <Box
                    h='10vw'
                    w='10vw'
                    minH='84px'
                    minW='84px'
                    maxH='200px'
                    maxW='200px'
                    bgGradient='linear(to-b, #096EE5, #D9D9D9)' 
                    p='0' 
                    overflow='hidden' 
                    borderRadius='5px'
                    mb='30px'
                    cursor='pointer'
                    transition="all 0.3s ease-in-out"  
                    _hover={{
                        border: '2px solid white',
                        transform: 'scale(1.05)', // 확대
                    }}
                >
                    <Image src={minsunHi} alt='minsun' />
                </Box>
    );
};

export default HiImage;