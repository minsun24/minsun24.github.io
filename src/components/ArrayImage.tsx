import { HStack, Image, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ArrayType, ProjectItem, TechItme } from '../types/types';
import ProjectModal from './ProjectModal';

interface StackItem {
    name:string;
    filename:string; 
}

interface ArrayImageProps {
    data: ArrayType;
    type: "stack" | "tech" | "project";
}

const ArrayImage = ({data, type}:ArrayImageProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    const handleModal = (index: number) => {
        if(type === 'project'){
            console.log(data[index]);
            setSelectedProject(data[index] as ProjectItem);
            console.log(data[index])
            onOpen();  // 모달 열기
        }
    }
    const handleClose = () => {
        onClose();
        setSelectedProject(null);
    }
    return (
        <>
        <HStack w='100%' spacing={4} overflowX="auto" py={4} px={6} > 
            {data.map((img, index) => (
                <Image 
                    key={index} 
                    src={img.filename} 
                    alt={img.name}
                    w='200px' 
                    h='150px' 
                    objectFit="contain"
                    cursor='pointer'
                    transition="all 0.3s ease-in-out"  
                    _hover={{
                        // border: '2px solid white',
                        transform: 'scale(1.2)', // 확대
                        zIndex:'100'
                    }}
                    onClick={()=> handleModal(index)}
                />
            ))}
        </HStack>
        {selectedProject && (
            <ProjectModal 
                isOpen={isOpen} 
                onClose={handleClose}
                data={selectedProject}  // 선택된 프로젝트 데이터 전달
            />
        )}
        </>
    );
};

export default ArrayImage;