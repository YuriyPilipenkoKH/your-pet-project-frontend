import React from 'react';
import {  TitleNotfound, Wrapper } from './NotfoundCont.styled';
import { iconPawprint } from '../../images/icons';
import { StyledLink } from '../Button/Button.styled';

export const NotfoundContent = () => {
    return (
        <Wrapper className="wrap">
            <TitleNotfound className="notfound">Ooops! </TitleNotfound>
            <TitleNotfound className="notfound">
                This page not found :(
            </TitleNotfound>
            <StyledLink to="/">To main page {iconPawprint}</StyledLink>
           
        </Wrapper>
    );
};
