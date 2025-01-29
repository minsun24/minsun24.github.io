import React, { useEffect, useState } from 'react';
import { 
    Box, Flex, Text, Image, HStack, Link, VStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import HiImage from '../assets/img/minsunHi.png';
import minsun from '../assets/img/MINSUN.png';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            zIndex='1000'
            position="fixed"
            top={0}
            left={0}
            right={0}
            transition="all 0.3s ease-in-out"
            backgroundColor={scrollPosition > 0 ? "#141414" : "transparent"}
        >
            <Box 
                color="white" 
                margin="0 auto"
                bgGradient={scrollPosition > 0 ? "none" : "linear(to-b, #141414, rgba(20, 20, 20, 0.8),  rgba(20, 20, 20, 0.3), rgba(20, 20, 20, 0))"}
            >
                <Flex 
                    alignItems="center" 
                    justifyContent="space-between" 
                    px={'5%'} 
                    py={4}
                >
                    {/* Logo Area */}
                    <Box flex="1">
                        <Link href='/home'>
                            <Image src={minsun} fontSize='25px' w='92.5px' h='25px'/>
                        </Link>
                    </Box>

                    {/* Navigation Menu */}
                    <Flex as="nav" flex="9" justifyContent='start' gap={6}>
                        <Text as={RouterLink} to="/home" color='white' fontSize='sm'>홈</Text>
                        <Text as={RouterLink} to="/about" color='white' fontSize='sm'>소개</Text>
                        <Text as={RouterLink} to="/tech" color='white' fontSize='sm'>테크</Text>
                        <Text as={RouterLink} to="/projects" color='white' fontSize='sm'>프로젝트</Text>
                        <Text as={RouterLink} to="/activities" color='white' fontSize='sm'>경험</Text>
                    </Flex>

                    {/* Profile Area */}
                    <Flex flex="1" justifyContent="flex-end" position="relative" >
                        <HStack cursor='pointer' alignContent={'center'} alignItems={'center'} zIndex={1000}>
                            <Box mr='10px' display="flex" flexDir="row" gap={3} alignItems={'center'} h='100%'>
                                <IoSearchOutline size='25px' />
                                <GoBell size='25px' />
                            </Box>
                            
                            <Box
                                w='35px'
                                h='35px'
                                bgGradient='linear(to-b, #096EE5, #D9D9D9)' 
                                overflow='hidden' 
                                borderRadius='5px'
                            >
                                <Image src={HiImage} alt='minsun' />
                            </Box>

                            {/* Dropdown Toggle */}
                            {isOpen
                                ? <MdArrowDropUp fontSize='30px' onClick={() => setIsOpen(prev => !prev)} />
                                : <MdArrowDropDown fontSize='30px' onClick={() => setIsOpen(prev => !prev)} />
                            }
                        </HStack>

                        {/* 드롭다운 메뉴 */}
                        {isOpen && (
                            <Box 
                                position="absolute"
                                top="50px"  // 화살표 아래에 배치
                                right="0"
                                bg="#181818"
                                color="white"
                                borderRadius="10px"
                                boxShadow="0 4px 10px rgba(0, 0, 0, 0.3)"
                                p="10px"
                                w="180px"
                                zIndex="999"
                            >
                                <VStack align="stretch" spacing={3}>
                                    <Link as={RouterLink} to="/guestbook">방명록</Link>
                                    <Link as={RouterLink} to="/profile">내 프로필</Link>
                                    <Link as={RouterLink} to="/settings">설정</Link>
                                    {/* <Link as={RouterLink} to="/logout" color="red.400">로그아웃</Link> */}
                                </VStack>
                            </Box>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Header;
