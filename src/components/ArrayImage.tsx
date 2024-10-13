import { HStack, Image } from '@chakra-ui/react';
import React from 'react';

interface StackItem {
    name:string;
    filename:string; 
}

interface ArrayImageProps {
    data: StackItem[];
}

const ArrayImage = ({data}:ArrayImageProps) => {

    return (
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
                        zIndex:'2000'
                    }}
                />
            ))}
        </HStack>
    );
};

export default ArrayImage;