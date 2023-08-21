import React from 'react';
import {  TitleNotfound, Wrapper } from './NotfoundCont.styled';
import { Button } from '../Button/Button';
import { iconPawprint } from '../../images/icons';

export const NotfoundContent = () => {
    return (
        <Wrapper className="wrap">
            <TitleNotfound className="notfound">Ooops! </TitleNotfound>
            <TitleNotfound className="notfound">
                This page not found :(
            </TitleNotfound>
            <Button to="/home">To main page {iconPawprint}</Button>
           
        </Wrapper>
    );
};
