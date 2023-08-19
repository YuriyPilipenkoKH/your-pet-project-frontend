
import { Button, ButtonTransparent, LogButton, RegButton } from "../components/Button/Button";
import { iconPawprint } from "../images/icons";
import { RiDeleteBin6Line } from 'react-icons/ri';
import doggy from '../images/doggy.png';
import { FaRegHeart } from "react-icons/fa";



export const modal1 = {     
        type: 1,
        width: '608px',
        // height: '429px', 
        title: 'Attention',
        text: 'We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
       
        btn1: <LogButton>Log IN {iconPawprint}</LogButton>,
        btn2:  <RegButton>Registration </RegButton>,
}

export const modal2 = {     
        type: 2,
        width: '608px',
        // height: '429px', 
        title: 'Delete adverstiment?',
        text: 'Are you sure you want to delete  “Cute dog looking for a home”? You can’t undo this action.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
        
        btn1:  <ButtonTransparent>Cacel</ButtonTransparent>,
        btn2: <Button>Yes <RiDeleteBin6Line/> </Button>,
}


export const modal3 = {     
        type: 3,
        width: '608px',
        // height: '429px', 
        title: 'Cute dog looking for a home',
        text: '',
        image: {doggy},
        buttonColor: '#13d', 
        buttonText: 'confirm',
        
        btn1:  <ButtonTransparent>Contact</ButtonTransparent>,
        btn2: <Button>Add to <FaRegHeart/> </Button>,
}