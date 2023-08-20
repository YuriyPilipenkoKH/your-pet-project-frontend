import React, { useState } from 'react';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { MenuWrapp } from './MobileMenu.styled';
import { StyledLogo } from '../Button/Button.styled';
import { iconLogo } from '../../images/icons';
import { OnCloseButton } from '../ModalPopup/ModalPopup.styled';
import { RxCross2 } from "react-icons/rx";

export  const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuWrapp className="menu">
        <StyledLogo to="/">{iconLogo}</StyledLogo>
        <AuthNav/>
        <Nav/>
  
        <OnCloseButton  ><RxCross2/></OnCloseButton> 
    </MenuWrapp>
  );
};

// onClick={onClose}