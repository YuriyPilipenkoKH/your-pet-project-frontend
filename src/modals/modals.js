
import { Button, ButtonTransparent, OutButton } from "../components/Button/Button";
import { iconPawprint } from "../images/icons";
import { RiDeleteBin6Line } from 'react-icons/ri';
import doggy from '../images/doggy.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLogout} from "react-icons/md";
import { StyledLinkLog, StyledLinkReg } from "../components/AuthNav/AuthNav.styled";
import { StyledLink } from "../components/Button/Button.styled";



export const modal1 = {     
        type: 1,
        widthm: '280px',
        heightm: '445px', 
        widthd: '608px',
        heightd: '429px', 
        title: 'Attention',
        text: 'We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
       
        btn1:  <StyledLinkLog to="/login" exact="true">
                        Log In {iconPawprint} </StyledLinkLog>,
        btn2:   <StyledLinkReg to="/register" exact="true">
                         Register   </StyledLinkReg>,
        btnsizem: '240px',
        btnsized: '165px',
}

export const modal2 = {     
        type: 2,
        widthm: '280px',
        heightm: '390px', 
        widthd: '608px',
        heightd: '352px', 
        title: 'Delete adverstiment?',
        text: 'Are you sure you want to delete  “Cute dog looking for a home”? You can’t undo this action.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
        
        btn1:  <ButtonTransparent>Cacel</ButtonTransparent>,
        btn2: <Button>Yes <RiDeleteBin6Line/> </Button>,
        btnsizem: '240px',
        btnsized: '130px',
}


export const modal3 = {     
        type: 3,
        widthm: '280px',
        heightm: '445px', 
        widthd: '608px',
        heightd: '429px',  
        title: 'Cute dog looking for a home',
        text: '',
        image: {doggy},
        buttonColor: '#13d', 
        buttonText: 'confirm',
        
        btn1:  <ButtonTransparent>Contact</ButtonTransparent>,
        btn2: <Button>Add to <FaRegHeart/> </Button>,
        btnsizem: '240px',
        btnsized: '165px',
}

export const modal4 = {     
        type: 4,
        widthm: '280px',
        heightm: '287px', 
        widthd: '608px',
        heightd: '354px', 
        title: 'Congrats!',
        text: 'Youre registration is success',
        image: null,
        buttonColor: '#13d', 
        buttonText: 'confirm',
       
        btn1: <StyledLink to="/profile" exact="true" >Go to profile {iconPawprint}</StyledLink>,
        btn2:  null,
        btnsizem: '240px',
        btnsized: '240px',
}

export const modal5 = {     
        type: 5,
        widthm: '280px',
        heightm: '302px', 
        widthd: '608px',
        heightd: '354px', 
        title: 'Already leaving?',
        text: null,
        image: null,
        buttonColor: '#13d', 
        buttonText: 'confirm',
       
        btn1:  <ButtonTransparent>Cacel</ButtonTransparent>,
        btn2: <OutButton  to="/" exact="true">Yes <MdOutlineLogout/> </OutButton>,
        btnsizem: '240px',
        btnsized: '130px',
}