import React from 'react';
import { NavWrap, StyledLink } from './Nav.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import {  useEffect, useState } from 'react';


export const Nav = ({onClose}) => {
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
 
    return (
        <NavWrap className='NavWrap'>
        <StyledLink to="/news"  onClick={onClose}> {lang.news} </StyledLink>
        <StyledLink to="/notices"  onClick={onClose}> {lang.find} </StyledLink> 
        <StyledLink to="/friends"  onClick={onClose}> {lang.sponsors} </StyledLink> 
        </NavWrap>
    )}