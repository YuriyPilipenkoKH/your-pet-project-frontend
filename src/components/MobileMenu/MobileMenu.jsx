import React, { useState } from 'react';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { CloseButton, MenuContent, MenuHeader, MenuWrapp } from './MobileMenu.styled';
import { StyledLogo } from '../Button/Button.styled';
import { iconLogo } from '../../images/icons';
import { RxCross2 } from "react-icons/rx";
import { UserNav } from '../UserNav/UserNav';
import { MainCard } from '../MainCard/MainCard';

export  const MobileMenu = ({ isOpen, onClose }) => {
   const [mod, setMod] = useState(true)
    const toggleMod = () => {
        setMod(!mod)
    }

  return (
    <MenuWrapp className= {isOpen ? ['menu', 'active'].join(' ') : 'menu'} >
            <MenuHeader>
                <StyledLogo to="/"  onClick={toggleMod}>{iconLogo}</StyledLogo>
               <CloseButton onClick={onClose} ><RxCross2/></CloseButton>
            </MenuHeader>
        <MenuContent>
            {mod ? <AuthNav   onClose={onClose}/> :  <UserNav   onClose={onClose}/> }
            <Nav  onClose={onClose}/>
        </MenuContent>

    </MenuWrapp>
  );
};
// <AuthNav   onClose={onClose}/>
// <UserNav   onClose={onClose}/>
