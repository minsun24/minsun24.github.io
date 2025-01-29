import { Box , Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { GrConnect } from "react-icons/gr";
import { SiExpo } from "react-icons/si";


interface BadgeProps{
    skill: string
}
function SkillBadges({skill}:BadgeProps) {
    const renderBadge =(skill:string)=>{
        let back_color= 'white'
        let text_color= 'black'
        let icon;
        switch(skill){
            case ("React.js") :
                // back_color='pink'
                icon = <FaReact  color='#09D9FE' fontSize='18px'/>
                break;
            case ("React Native") :
                // back_color='pink'
                icon = <FaReact  color='#09D9FE' fontSize='18px'/>
                break;
            case("MUI"):
                icon= <SiMui color='#2196f3' fontSize='18px'/>
                break;
            case("Javascript"):
                icon = <IoLogoJavascript color='#FFD83B' fontSize='18px'/>
                break;
            case("DRF"):
                icon=<SiDjango color='#132D20' fontSize='18px'/>
                break;
            case("Django"):
                icon=<SiDjango color='#132D20' fontSize='18px'/>
                break;
            case("Python"):
                icon=<IoLogoPython color='#4381B3' fontSize='18px'/>
                break;
            case("Bootstrap"):
                icon=<FaBootstrap color='#681da8' fontSize='18px'/>
                break;
            case("Typescript"):
                icon=<SiTypescript color='#3178C6' fontSize='18px'/>
                break;
            case("CSS"):
                icon=<FaCss3Alt  color='#007aff' fontSize='18px'/>
                break;
            case("HTML"):
                icon=<FaHtml5 color='#E44D26' fontSize='18px'/>
                break;
            case("Channels"):
                icon=<GrConnect color='#40C1C3' fontSize='18px'/>
                break;
            case("Expo-Cli"):
                icon=<SiExpo fontSize='18px'/>
                break;
                

        }
        return icon
    }
    return (
        <Button leftIcon={renderBadge(skill)} size='sm'>
            {skill}
        </Button>
        // <Box w='fit-content' px={3} py={1} borderRadius='5px' alignItems={'center'} 
        // // color={renderBadge(skill).text_color}
        // color='black'
        // bgColor='white'
        // // bgColor={renderBadge(skill).back_color}
        // >
        //     <Text >
        //     {skill}
        //     </Text>
            
        // </Box>
    );
}

export default SkillBadges;