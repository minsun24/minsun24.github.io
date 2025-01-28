import { Box , Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { FaFigma } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdCloudSync } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";


interface BadgeProps{
    tool: string
}
function ToolBadges({tool}:BadgeProps) {
    const renderBadge =(tool:string)=>{
        let back_color= 'white'
        let text_color= 'black'
        let icon;
        switch(tool){
            case ("Figma") :
                // back_color='pink'
                icon = <FaFigma   color='#A259FF' fontSize='18px'/>
                break;
            case ("Vscode") :
                // back_color='pink'
                icon = <VscVscodeInsiders  color='#0078d7' fontSize='18px'/>
                break;
            case ("ERD-Cloud"):
                icon = <MdCloudSync color='#9388FB' fontSize='18px'/>
                break;
            case ("Git"):
                icon =<FaGitAlt color='#F05133' fontSize='18px'/> 
                break;
            
                

        }
        return icon
    }
    return (
        <Button leftIcon={renderBadge(tool)} size='sm'>
            {tool}
        </Button>
        // <Box w='fit-content' px={3} py={1} borderRadius='5px' alignItems={'center'} 
        // // color={renderBadge(tool).text_color}
        // color='black'
        // bgColor='white'
        // // bgColor={renderBadge(tool).back_color}
        // >
        //     <Text >
        //     {tool}
        //     </Text>
            
        // </Box>
    );
}

export default ToolBadges; 