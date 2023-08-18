
import { AuthNavWrap, LayoutWrap, LogoLink, SharedLayoutWrap } from "./SharedLayout.styled";

import { iconLogo } from "../../images/icons";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthNav } from "../AuthNav/AuthNav";
import { ButtonBurger } from "../Nav/Nav.styled";
import { Nav } from "../Nav/Nav";
import { RxHamburgerMenu } from 'react-icons/rx';

export const SharedLayout = () => {
  return (
    <SharedLayoutWrap className="sharedLayout">
      <LayoutWrap className="layoutWrap">
        <LogoLink to="/">{iconLogo}</LogoLink>
        <Nav/>
        <AuthNavWrap>
          <AuthNav/>
          
          <ButtonBurger><RxHamburgerMenu/></ButtonBurger> 
        </AuthNavWrap>
        
      </LayoutWrap>
      <Suspense>
          <Outlet />
        </Suspense>
    </SharedLayoutWrap>
  );
};
