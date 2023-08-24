import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 1279px) {
    display: none;
      
    }
    @media screen and (min-width: 1280px) {
      flex-direction: row;
    }

    &>a.active {
      color: var(--yellow);
    }

`

export const StyledLink = styled(NavLink)`
  
  color: var(--black);
  text-decoration:none;
  font-size: 20px;
  font-weight: 600;

`
export const ButtonBurger = styled.button`

  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &> svg {
    width: 2em;
    height: 2em;
  color: var(--yellow);
  @media screen and (min-width: 1280px) {
      display: none;
      
    }
}
`