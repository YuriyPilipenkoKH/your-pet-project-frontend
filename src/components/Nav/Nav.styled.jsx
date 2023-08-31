import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
transition: all 1s ease-in-out;

    @media screen and (max-width: 1279px) {
    display: none;
      
    }
    @media screen and (min-width: 1280px) {
      flex-direction: row;
    }
    &>a{
      transition: all 0.4s ease-in-out;
    }
      &>a:hover,
      &>a:focus {
      transition: all 0.4s ease-in-out;
      color: var(--yellow);
      outline: none;
    }


    &>a.active {
      color: var(--yellow);
    }

`

export const StyledLink = styled(NavLink)`
  text-align: center;
  color: var(--text-color);
  text-decoration:none;
  font-size: 20px;
  font-weight: 600;
  transition: all 250ms;
  &:hover, &:active, &:focus {
    color: var(--yellow);
  }

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