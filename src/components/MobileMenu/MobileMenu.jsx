import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { CloseButton, MenuContent, MenuHeader, MenuWrapp } from './MobileMenu.styled';
import { StyledLogo } from '../Button/Button.styled';
import { iconLogo } from '../../images/icons';
import { RxCross2 } from "react-icons/rx";

export  const MobileMenu = ({ isOpen, onClose }) => {
    // console.log('isOpen',isOpen)

  return (
    <MenuWrapp className= {isOpen ? ['menu', 'active'].join(' ') : 'menu'} >
            <MenuHeader>
                <StyledLogo to="/"  onClick={onClose}>{iconLogo}</StyledLogo>
               <CloseButton onClick={onClose} ><RxCross2/></CloseButton>
            </MenuHeader>
        <MenuContent>
            <AuthNav   onClose={onClose}/>
            <Nav  onClose={onClose}/>
        </MenuContent>
    </MenuWrapp>
  );
};

