import React from 'react';
import { NavWrap, StyledLink } from './Nav.styled';



export const Nav = () => {
 
    return (
        <NavWrap className='NavWrap'>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/find pet">Find pet</StyledLink> 
        <StyledLink to="/our friends">Our Friends</StyledLink> 
        </NavWrap>
    )}