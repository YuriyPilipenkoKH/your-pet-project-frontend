import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { buttonStyles, hoverStylesB,  ripple } from '../Button/Button.styled';

export const UserWrap = styled.div`
    display: none;
    
    @media screen and (min-width: 768px) {
      display: flex;
      justify-self: flex-end;
      gap: 20px;
      
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