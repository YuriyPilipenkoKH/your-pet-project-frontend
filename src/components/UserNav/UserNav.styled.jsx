import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { buttonStyles, hoverStylesB,  ripple } from '../Button/Button.styled';

export const UserWrap = styled.div`


&.UserNav {
  display: none;
  /* @media screen and(min-width: 767px) {
    display: none;

  } */
  
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
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

export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 320px;
    font-size: 20px;
    font-weight: 600;
    color: var(--yellow);

    &>svg{
        fill: var(--yellow);
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