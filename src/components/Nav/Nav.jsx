import React from 'react';
import { NavWrap, StyledLink } from './Nav.styled';



export const Nav = ({onClose}) => {
 
    return (
        <NavWrap className='NavWrap'>
        <StyledLink to="/news"  onClick={onClose}>News</StyledLink>
        <StyledLink to="/notices"  onClick={onClose}>Find pet</StyledLink> 
        <StyledLink to="/our friends"  onClick={onClose}>Our Friends</StyledLink> 
        </NavWrap>
    )}