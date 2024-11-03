import { Image, Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Button, HStack, IconButton, Divider, VStack, Link, Grid, GridItem } from '@chakra-ui/react';
import React, { Component, useState } from 'react';
import profileMinsun from '../assets/img/profileMinsun.png';
import { IoMdPlay } from "react-icons/io";
import { HiOutlineThumbUp } from "react-icons/hi";
import { FaThumbsUp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface MyProfileProps{
    isOpen: boolean;
    onClose: () => void;
}
const MyProfile = ({ isOpen, onClose }: MyProfileProps) => {
    const [isHeart, setIsHeart]= useState<boolean>(false);

    function handleHeart(){
        setIsHeart(!isHeart);
    }


    return(
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
        <ModalOverlay bgColor='rgba(0,0,0,0.6)' />
        <ModalContent bgColor="#181818" borderRadius='10px'>
            <ModalHeader     
            pt='2rem'
            pb='0'
            px='1.5rem'    
            borderTopRadius='10px'
            bgGradient='linear-gradient(180deg, #6EB1FF 0%, #FFFFFF 100%)'  
            w='100%' position='relative'
            textAlign={'left'}
            justifyContent={'right'}
            >
            
            <Text 
            color='white' 
            fontFamily="'Anton', sans-serif" 
            fontSize='3.2rem'
            letterSpacing='wider'
            fontWeight='normal'
            textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            alignContent={'end'}
            position='absolute'
            w='100%'
            bottom='12%'
            left="6%"
            >
                <p>FRONTEND</p>
                <p>JEONG MINSUN</p>
            </Text>
            <Image src={profileMinsun}  float='right' justifyContent={'right'} w='270px' />
            <Box 
            h='30px'
            w='100%'
            left='0'
            position='absolute'
            bottom='0'
            bgGradient={'linear-gradient(0deg, #181818 -2.38%, rgba(0, 0, 0, 0.552275) 49.4%, rgba(0, 0, 0, 0) 97.62%)'}>

            </Box>
            
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody pt="1rem" pb={6} px="3rem">
            <HStack spacing={5}>
                <Button leftIcon={<IoMdPlay />}><Link href='/projects'>프로젝트</Link></Button>
                <IconButton
                onClick={handleHeart}
                color={isHeart ? "black" : "white"}
                bgColor={isHeart ? "white" : "black"}
                icon={<FaThumbsUp fontSize={isHeart ? "1.3rem" : "1rem"} />}
                aria-label="Like"
                variant="ghost"
                borderRadius="30px"
                border="solid white 1.2px"
                />
            </HStack>

            <Box mt="2rem" color="white" px="2rem" pb='3rem'>
                {/* Profile Section */}
                <Box mb="2rem">
                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                    Profile
                </Text>
                <Divider mt="0.7rem" />
                <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={3} fontWeight="thin">
                    <Text>정민선</Text>
                    
                    {/* Using Grid for consistent alignment */}
                    <Grid templateColumns="140px 1fr" gap={3}>
                    <GridItem>
                        <Text>2002년 2월 4일생</Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize="xs">23세</Text>
                    </GridItem>

                    <GridItem>
                        <Text>국민대학교</Text>
                    </GridItem>
                    <GridItem>
                        <VStack align="flex-start" spacing={1}>
                        <Text fontSize="sm">소프트웨어미디어융합전공</Text>
                        <Text fontSize="xs">2021년 3월 입학 ~ 2025년 2월 졸업 예정</Text>
                        </VStack>
                    </GridItem>

                    <GridItem>
                        <Text>원묵고등학교</Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize="xs">2018년 입학 ~ 2021년 2월 졸업</Text>
                    </GridItem>
                    </Grid>
                </VStack>
                </Box>

                {/* Contact Section */}
                <Box mb="2rem">
                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                    Contact
                </Text>
                <Divider mt="0.7rem" />
                <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={3} fontWeight="thin">
                    <Grid templateColumns="24px 1fr" gap={3}>
                    <GridItem>
                        <FaPhoneAlt />
                    </GridItem>
                    <GridItem>
                        <Text>010-6854-4952</Text>
                    </GridItem>

                    <GridItem>
                        <MdEmail />
                    </GridItem>
                    <GridItem>
                        <Text>jms49526@gmail.com</Text>
                    </GridItem>

                    <GridItem>
                        <FaGithub />
                    </GridItem>
                    <GridItem>
                        <Link href="https://github.com/minsun24" isExternal>
                        minsun24
                        </Link>
                    </GridItem>
                    </Grid>
                </VStack>
                </Box>

                {/* Certificate Section */}
                <Box mb="2rem">
                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                    Certificate
                </Text>
                <Divider mt="0.7rem" />
                <Box ml="0.6rem" mt="1rem" fontWeight="thin">
                    <Grid templateColumns="140px 1fr" gap={3}>
                    <GridItem>
                        <Text>정보처리기사</Text>
                    </GridItem>
                    <GridItem>
                        <VStack align="flex-start" spacing={1} fontSize="xs">
                        <Text>한국산업인력공단</Text>
                        <Text>2024년 6월 취득</Text>
                        </VStack>
                    </GridItem>
                    </Grid>
                </Box>
                </Box>
                <Box>
                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                    History
                </Text>
                <Divider mt="0.7rem" />
                <Box ml="0.6rem" mt="1rem" fontWeight="thin">
                    <Grid templateColumns="140px 1fr" gap={3}>
                    <GridItem>
                        <Text>슈어소프트테크</Text>
                    </GridItem>
                    <GridItem>
                        <VStack align="flex-start" spacing={1} >
                        <Text fontSize="sm">정적분석기술팀 / 프론트엔드 개발 인턴</Text>
                        <Text fontSize="xs">2024년 6월 ~ 재직중</Text>
                        </VStack>
                    </GridItem>
                    </Grid>
                </Box>
                </Box>
            </Box>
            </ModalBody>
        
        </ModalContent>
        </Modal>
    )
    
};

export default MyProfile;