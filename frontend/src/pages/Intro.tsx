import { Box, Text, Image, VStack, Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import minsunHi from '../assets/img/minsunHi.png';
import HiImage from '../components/HiImage';

const Intro = () => {
    const renderImages = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <HiImage key={index} />
        ));
    }


    return (
        <Flex w='100vw' h='100vh' bgColor="#141414" p={100} direction="column" alignItems="center" justifyContent="center">
            <VStack spacing={8}>
                <Text color='white' fontSize='5xl' textAlign='center'>
                    안녕하세요, 프론트엔드 개발자 정민선입니다.
                </Text>
                <Box
                    w='250px'
                    h='250px'
                    bgGradient='linear(to-b, #096EE5, #D9D9D9)' 
                    p='0' 
                    overflow='hidden' 
                    borderRadius='5px'
                    mb='40px'
                    cursor='pointer'
                    transition="all 0.3s ease-in-out"  
                    _hover={{
                        border: '2px solid white',
                        transform: 'scale(1.05)', // 확대
                    }}
                    as={RouterLink}
                    to='/home'
                >
                    <Image src={minsunHi} alt='minsun' />
                </Box>

                <Button 
                    borderRadius='0' 
                    border='solid 1px #AEAEB2' 
                    bgColor='rgba(28,28,28,0)' 
                    color='#AEAEB2'
                    fontSize='xl'
                    p='25px 40px'
                >
                    포트폴리오 보러가기
                </Button>
            </VStack>
        </Flex>
    );
};

export default Intro;


