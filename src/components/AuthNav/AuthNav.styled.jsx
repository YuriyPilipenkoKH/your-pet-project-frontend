import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyles, hoverStylesY, ripple } from '../Button/Button.styled';

export const AuthBtnWrap = styled.div`
    display: none;
    
    @media screen and (min-width: 768px) {
      display: flex;
      justify-self: flex-end;
      gap: 20px;
      
    }

`
export const StyledLinkReg = styled(NavLink)`
  ${buttonStyles} ;
 ${ripple} ;

border: 2px solid var(--yellow);
background-color: var(--fone-color);
color: var(--yellow);
width: 165px;
transition: all 0.4s ease; 

${hoverStylesY} ;

`;

export const StyledLinkLog = styled(NavLink)`
  ${buttonStyles} ;
 ${ripple} ;
 
 background-color: var(--yellow);
 color: var(--fone-color);
 width: 165px;
 
 ${hoverStylesY} ;
`;