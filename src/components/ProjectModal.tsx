import { Image, Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Button, HStack, IconButton, Divider, VStack, Link, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoMdPlay } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { ProjectItem } from '../types/types';
import SkillBadges from './SkillBadges';
import ToolBadges from './ToolBadges';
import RoleBadge from './RoleBadge';


interface ProjectModalProps{
    isOpen: boolean;
    onClose: () => void;
    data: ProjectItem;
}
const ProjectModal = ({ isOpen, onClose, data }: ProjectModalProps) => {

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
            
            <Image src={data?.filename} w='100%' h='275px' m='0 auto' objectFit={'cover'} borderTopRadius='10px' />
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
                {data.data.korean_name} {data?.data.name}
                </Box>
                    <HStack spacing={5} pt='9%' h='100%' px="2rem">
                        {data.link && (
                            <Button leftIcon={<IoMdPlay />} size='sm'>
                                상세 페이지
                            </Button>
                        )}
                        <Link href={data.link} isExternal>
                        <IconButton
                        size='sm'
                            icon={<FaGithub fontSize="1.2rem" />}
                            aria-label="Github"
                            variant="ghost"
                            color="white"
                            borderRadius="30px"
                            border="solid white 1.2px"
                        />
                        </Link>
                    </HStack>

                    <Box mt="2rem" color="white" px="2rem" pb='3rem'>
                        {/* Summary Section */}
                        <Box mb="2rem">
                            <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                Summary
                            </Text>
                            <Divider mt="0.7rem" />
                            <Text ml="0.6rem" mt="1rem" fontWeight="thin">
                                {data.data.summary}
                            </Text>
                        </Box>

                        {/* Skills Section */}
                        <Box mb="2rem">
                            <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                Skills
                            </Text>
                            <Divider mt="0.7rem" />
                            <HStack ml="0.6rem" mt="1rem" flexWrap="wrap" spacing={3}>
                                {data.data.skills.map((skill, index) => (
                                    <SkillBadges skill={skill} />
                                ))}
                            </HStack>
                        </Box>
                          {/* Tool Section */}
                          <Box mb="2rem">
                            <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                Tools
                            </Text>
                            <Divider mt="0.7rem" />
                            <HStack ml="0.6rem" mt="1rem" flexWrap="wrap" spacing={3}>
                                {data.data.tools.map((tool, index) => (
                                    <ToolBadges tool={tool}/>
                                ))}
                            </HStack>
                        </Box>

                        {/* Project Info */}
                        <Box mb="2rem">
                            <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                Project Info
                            </Text>
                            <Divider mt="0.7rem" />
                            <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={3} fontWeight="thin">
                                <Grid templateColumns="100px 1fr" gap={3}>
                                    <GridItem>
                                        <Text as='b'>진행 기간</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontSize="15px">{data.data.period}</Text>
                                    </GridItem>

                                    <GridItem>
                                        <Text as='b'>개발 인원</Text>
                                    </GridItem>
                                    <GridItem>
                                        <VStack align="flex-start" spacing={1}>
                                            {data.data.team.backend > 0 && (
                                                <Text fontSize="15px">Backend: {data.data.team.backend}명</Text>
                                            )}
                                            {data.data.team.frontend > 0 && (
                                                <Text fontSize="15px">Frontend: {data.data.team.frontend}명</Text>
                                            )}
                                            {data.data.team.designer > 0 && (
                                                <Text fontSize="15px">Designer: {data.data.team.designer}명</Text>
                                            )}
                                            {data.data.team.pm > 0 && (
                                                <Text fontSize="15px">PM: {data.data.team.pm}명</Text>
                                            )}
                                        </VStack>
                                    </GridItem>

                                    <GridItem>
                                        <Text as='b'>역할</Text>
                                    </GridItem>
                                    <GridItem>
                                        <HStack align="flex-start" spacing={3}>
                                            {data.data.role.map((role, index) => (
                                                // <Text key={index} fontSize="15px">{role}</Text>
                                                <RoleBadge role={role} key={index}/>
                                            ))}
                                        </HStack>
                                    </GridItem>
                                </Grid>
                            </VStack>
                        </Box>
                        <Box mb="2rem">
                        {data.data.details && (
                            <Box>
                                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                    Details
                                </Text>
                                <Divider mt="0.7rem" />
                                <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={4}>
                                    {data.data.details.map((detail, index) => (
                                        <Box key={index}>
                                            <Text fontSize="sm" fontWeight="thin">
                                                {detail}  {/* ✅ 단순 텍스트로 출력 */}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                        </Box>
                        <Box mb="2rem">
                        {data.data.learned && (
                            <Box>
                                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                    Learned
                                </Text>
                                <Divider mt="0.7rem" />
                                <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={4}>
                                    {data.data.learned.map((learn, index) => (
                                        <Box key={index}>
                                            <Text fontSize="sm" fontWeight="thin">
                                                {learn}  {/* ✅ 단순 텍스트로 출력 */}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Box>
    );
};

export default ProjectModal;