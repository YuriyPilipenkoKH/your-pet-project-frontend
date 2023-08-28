import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const SharedLayoutWrap = styled.div`
    width: 100%;
`;

export const LogoLink = styled(NavLink)`
    width: 116px;
    @media screen and (min-width: 768px) {
        width: 162px;
    }
`;

export const LayoutWrap = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const AuthNavWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const AuthBtnWrap = styled.div`
    position: absolute;
    bottom: -20px;
    display: flex;
    align-items: center;
    gap: 25px;



`;



export const ThemeBtn = styled.button`
   /* margin-left: auto; */
 
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.4ms ease-in-out;
    cursor: pointer;
 
    

    &> svg {
        transition:  fill 1s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition:  fill 1s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
`

export const LangBtn = styled.button`
    margin-left: auto;
    width: 50px;   
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.4ms ease-in-out;
    cursor: pointer;
    color: var(--text-color) ;
    font-weight: 600;
    

    &> svg {
        transition:  fill 1s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition:  fill 1s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
`