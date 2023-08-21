import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { CloseButton, MenuContent, MenuHeader, MenuWrapp } from './MobileMenu.styled';
import { StyledLogo } from '../Button/Button.styled';
import { iconLogo } from '../../images/icons';
import { RxCross2 } from "react-icons/rx";
import { UserNav } from '../UserNav/UserNav';

export  const MobileMenu = ({ isOpen, onClose }) => {
    // console.log('isOpen',isOpen)

  return (
    <MenuWrapp className= {isOpen ? ['menu', 'active'].join(' ') : 'menu'} >
            <MenuHeader>
                <StyledLogo to="/"  onClick={onClose}>{iconLogo}</StyledLogo>
               <CloseButton onClick={onClose} ><RxCross2/></CloseButton>
            </MenuHeader>
        <MenuContent>
            <UserNav   onClose={onClose}/>
            <Nav  onClose={onClose}/>
        </MenuContent>
    </MenuWrapp>
  );
};
// <AuthNav   onClose={onClose}/>
// <UserNav   onClose={onClose}/>
