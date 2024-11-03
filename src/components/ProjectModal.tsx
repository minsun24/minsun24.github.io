import { Image, Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Button, HStack, IconButton, Divider, VStack, Link, Grid, GridItem } from '@chakra-ui/react';
import React, { Component, useState } from 'react';
import profileMinsun from '../assets/img/profileMinsun.png';
import { IoMdPlay } from "react-icons/io";
import { HiOutlineThumbUp } from "react-icons/hi";
import { FaThumbsUp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { ProjectItem } from '../types/types';

interface ProjectModalProps{
    isOpen: boolean;
    onClose: () => void;
    data: ProjectItem;
}
const ProjectModal = ({ isOpen, onClose, data }: ProjectModalProps) => {
    const [isHeart, setIsHeart] = useState<boolean>(false);

    if (!data.data) return null;  // data.data가 없으면 렌더링하지 않음

    return (
        <Box zIndex='1400' position='absolute'>
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
        <ModalOverlay bgColor='rgba(0,0,0,0.6)' />
        <ModalContent bgColor="#181818" borderRadius='10px'>
        <ModalHeader w='100%' 
        // bgImage={data?.filename} 
        objectFit="cover" overflow='hidden'>
            <Box h='200px'>
            <Image src={data?.filename} w='200px' objectFit={'cover'}/>
            <Text color='white'>{data?.name}</Text>
            </Box>
            
        </ModalHeader>
                <ModalCloseButton color="white" zIndex="2" />
                <ModalBody pt="1rem" pb={6} px="3rem">
                    <HStack spacing={5}>
                        {data.data.link && (
                            <Button leftIcon={<IoMdPlay />}>
                                <Link href={data.data.link} isExternal>Demo</Link>
                            </Button>
                        )}
                        <IconButton
                            icon={<FaGithub fontSize="1.2rem" />}
                            aria-label="Github"
                            variant="ghost"
                            color="white"
                            borderRadius="30px"
                            border="solid white 1.2px"
                        />
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
                                    <Text key={index} fontSize="sm" fontWeight="thin">
                                        {skill}
                                    </Text>
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
                                <Grid templateColumns="140px 1fr" gap={3}>
                                    <GridItem>
                                        <Text>Period</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text fontSize="sm">{data.data.period}</Text>
                                    </GridItem>

                                    <GridItem>
                                        <Text>Team</Text>
                                    </GridItem>
                                    <GridItem>
                                        <VStack align="flex-start" spacing={1}>
                                            {data.data.team.backend > 0 && (
                                                <Text fontSize="sm">Backend: {data.data.team.backend}명</Text>
                                            )}
                                            {data.data.team.frontend > 0 && (
                                                <Text fontSize="sm">Frontend: {data.data.team.frontend}명</Text>
                                            )}
                                            {data.data.team.designer > 0 && (
                                                <Text fontSize="sm">Designer: {data.data.team.designer}명</Text>
                                            )}
                                            {data.data.team.pm > 0 && (
                                                <Text fontSize="sm">PM: {data.data.team.pm}명</Text>
                                            )}
                                        </VStack>
                                    </GridItem>

                                    <GridItem>
                                        <Text>Role</Text>
                                    </GridItem>
                                    <GridItem>
                                        <VStack align="flex-start" spacing={1}>
                                            {data.data.role.map((role, index) => (
                                                <Text key={index} fontSize="sm">{role}</Text>
                                            ))}
                                        </VStack>
                                    </GridItem>
                                </Grid>
                            </VStack>
                        </Box>

                        {/* Details Section */}
                        {data.data.details && (
                            <Box>
                                <Text ml="0.6rem" fontSize="xl" fontWeight="bold" letterSpacing="wider">
                                    Details
                                </Text>
                                <Divider mt="0.7rem" />
                                <VStack align="stretch" ml="0.6rem" mt="1rem" spacing={4}>
                                    {data.data.details.map((detail, index) => (
                                        <Box key={index}>
                                            <Text fontSize="md" fontWeight="semibold" mb={2}>
                                                {detail.page}
                                            </Text>
                                            <Text fontSize="sm" fontWeight="thin" mb={2}>
                                                {detail.function}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Box>
    );
};

export default ProjectModal;