import { Box , Button, Text } from '@chakra-ui/react';
import React from 'react';


interface BadgeProps{
    role: string
}
function RoleBadges({role}:BadgeProps) {
    const renderBadge =(role:string)=>{
        let back_color;
        switch(role){
            case ("프론트엔드") :
                back_color="#B0A1EC"
                break;
            case ("백엔드") :
                back_color="#C8EFFA"
                break;
            case ("디자인"):
                back_color="#FFF390"
                break;
            case ("기획"):
                back_color="white"
                break;
            
                

        }
        return back_color
    }
    return (
        <Button  size='sm' bgColor={renderBadge(role)}>
            {role}
        </Button>
  
    );
}

export default RoleBadges; 