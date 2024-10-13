import { Box, Button, Flex, HStack, Image, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import typing from '../assets/img/f9ba232d6b18c80b3a95c1ec8dc1c796.gif';
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import ArrayImage from '../components/ArrayImage';
import {stackData} from '../assets/stack';
import {techData} from '../assets/tech';
import {projectData} from '../assets/project';
import Footer from '../components/Footer';


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure() // 프로필 모달 


    return (
        <Flex w='100vw' bgColor='#141414' h='100%' minH='100vh' direction="column">
            <Header />
            <Box w='100%' position="relative" h='fit-content'>
                <Box 
                    position="relative" 
                    w='100%' 
                    h='830px'
                    _after={{
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '200px',
                        backgroundImage: 'linear-gradient(to bottom, rgba(20,20,20,0), rgba(20,20,20,1))',
                        pointerEvents: 'none',
                    }}
                >
                    <Image 
                        src={typing} 
                        alt='typing' 
                        objectFit="cover" 
                        w='100%' 
                        opacity='0.7'
                        h='100%'
                    />
                    <VStack 
                        zIndex={1000}
                        position='absolute' 
                        bottom='100px'
                        left='5%'
                        alignItems='flex-start'
                        spacing={4}
                    >
                        <Text 
                            color='white' 
                            fontSize='7xl' 
                            // fontWeight='bold'
                            textShadow="2px 2px 4px rgba(0,0,0,0.6)"
                            fontFamily="'Anton', sans-serif"
                            letterSpacing="wide"
                        >
                            FRONTEND DEVELOPER
                        </Text>
                        <Text 
                            color='white' 
                            fontSize='7xl' 
                            // fontWeight='bold'
                            textShadow="2px 2px 4px rgba(0,0,0,0.6)"
                            fontFamily="'Anton', sans-serif"
                            letterSpacing="wide"
                        >
                            JEONG MINSUN
                        </Text>
                        <Text color='white' fontSize='xl' fontWeight='bold' mt='20px'>
                            안녕하세요, 프론트엔드 개발자를 꿈꾸는 정민선입니다. 
                        </Text>
                        <HStack mt='15px'>
                        <Button leftIcon={<FaPlay color='black'/>} fontSize='xl' p={6}  >
                        프로젝트 보기
                        </Button>
                        <Button leftIcon={<MdInfoOutline color='white'/>} bgColor='rgba(109,109,110,0.7)' color='white' fontSize='xl' fontWeight='normal' p={6}
                        onClick={onOpen}
                        >
                        상세 정보
                        </Button>
                        </HStack>
                        
                    </VStack>

                    
                </Box>

                
            </Box> 
            <Box w='100%' px='60px' py='30px' mt='20px' >
                <Text color='white' fontSize="2xl" fontWeight="" mb={1}  px={6}>언어</Text>
                <ArrayImage data={stackData} />
                <Text color='white' fontSize="2xl" fontWeight="" mb={1}  px={6}>프레임워크 / 도구</Text>
                <ArrayImage data={techData} />
                <Text color='white' fontSize="2xl" fontWeight="" mb={1}  px={6}>프로젝트</Text>
                <ArrayImage data={projectData} />
            </Box>

            <Footer />
        </Flex>
    );
};

export default Home;