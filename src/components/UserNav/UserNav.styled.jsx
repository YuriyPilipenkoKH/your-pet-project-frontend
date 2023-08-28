import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { buttonStyles, hoverStylesB,  ripple } from '../Button/Button.styled';
import isPropValid from '@emotion/is-prop-valid';

export const UserWrap = styled.div`


&.UserNav {
  display: none;


  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 20px;

    &>.logout{
    display: none;
  }
  
  }
  @media screen and (min-width: 1280px) {


    &>.logout{
    display: flex;
  }
  
  }
}


/* &>.logout {
   position: absolute;
    bottom: 20px;
    right: 50%;

    @media screen and (min-width: 768px) {
    position: relative;
    justify-self: start;
  }
} */

`

export const StyledUserLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 

`

export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 320px;
    font-size: 20px;
    font-weight: 600;
    color: var(--yellow);
    
    &>a {
          color: var(--yellow);
          display: flex;
        align-items: center;
       justify-content: center;
        gap: 30px;

    }

    &>svg{
          fill: var(--yellow);
      }

    &>a {
      background: none !important;
      padding: 10px;

      &>svg{
          fill: var(--yellow);
      }
    }



`
export const StyledLinkOut = styled(NavLink)`
 ${buttonStyles} 
 ${ripple} 

 border: 2px solid var(--blue);
background-color: var(--blue);
color: var(--white);
width: 135px;
transition: all 0.4s ease; 

${hoverStylesB} 

& >svg {
width: 24px;
transform: rotate(180deg);
}

`;

export const PhotoWrap =  styled.img.withConfig({
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'avatar',
})`
  width: 50px;
  height: 50px;
  border-radius: 50%; 

`