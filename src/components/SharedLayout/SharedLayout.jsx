import React, { useState } from 'react';
import { AuthNavWrap, LayoutWrap,  SharedLayoutWrap } from "./SharedLayout.styled";

import { iconLogo } from "../../images/icons";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthNav } from "../AuthNav/AuthNav";
import { ButtonBurger } from "../Nav/Nav.styled";
import { Nav } from "../Nav/Nav";
import { RxHamburgerMenu } from 'react-icons/rx';
import { StyledLogo } from "../Button/Button.styled";
import { MobileMenu } from '../MobileMenu/MobileMenu';


export const SharedLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };

  return (
    <SharedLayoutWrap className="sharedLayout">
      <LayoutWrap className="layoutWrap">
        <StyledLogo to="/">{iconLogo}</StyledLogo>
        <Nav/>
        <AuthNavWrap>
          <AuthNav/>
          <ButtonBurger onClick={toggleMenu}><RxHamburgerMenu/></ButtonBurger> 
          
        </AuthNavWrap>
        <MobileMenu isOpen ={isOpen } onClose = {toggleMenu}  />
      </LayoutWrap>
      <Suspense>
          <Outlet />
        </Suspense>
    </SharedLayoutWrap>
  );
};
