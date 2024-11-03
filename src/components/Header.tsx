import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, HStack, Link,  } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import HiImage from '../assets/img/minsunHi.png';
import { MdArrowDropDown } from "react-icons/md";
import minsun from '../assets/img/MINSUN.png';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
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
            translateY={0}
            transitionProperty="all"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor={scrollPosition > 0 ? "#141414" : "transparent"}
            // boxShadow={scrollPosition > 0 ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}
            // boxShadow={scrollPosition > 0 ? "none" : "0 4px 10px -1px rgba(0, 0, 0, 0), 0 2px 6px -1px rgba(0, 0, 0, 0.06)"}
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
                        
                        {/* <Text as={RouterLink} to="/home" color='#E50914' fontWeight={'bold'} fontSize='xl'>
                            M I N S U N 
                        </Text> */}
                    </Box>

                    {/* Navigation Menu */}
                    <Flex as="nav" flex="9" justifyContent='start' gap={6}>
                        <Text as={RouterLink} to="/home" color='white' fontSize='sm'>홈</Text>
                        <Text as={RouterLink} to="/about" color='white' fontSize='sm'>소개</Text>
                        <Text as={RouterLink} to="/tech" color='white' fontSize='sm'>테크</Text>
                        <Text as={RouterLink} to="/projects" color='white' fontSize='sm'>프로젝트</Text>
                        <Text as={RouterLink} to="/activities" color='white' fontSize='sm'>활동</Text>
                    </Flex>

                    {/* Profile Area */}
                    <Flex flex="1" justifyContent="flex-end">
                        <HStack cursor='pointer'>
                            <Box
                                w='35px'
                                h='35px'
                                bgGradient='linear(to-b, #096EE5, #D9D9D9)' 
                                p='0' 
                                overflow='hidden' 
                                borderRadius='5px'
                            >
                                <Image src={HiImage} alt='minsun' />
                            </Box>
                            <MdArrowDropDown fontSize='30px'/>
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
            
        </Box>
    );
};

export default Header;