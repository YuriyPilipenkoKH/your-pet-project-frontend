import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const UserFormWrap = styled.div`
position: relative;
width: 280px;
height: 517px;
display: grid;
grid-template-rows: 230px auto 75px;

gap: 16px;

&>button.saveBtn{
        width: 240px;
        height: 31px; 
       justify-self: center;  
    }

`
export const FormStyled = styled.form`

display: grid;
gap: 25px;
font-size: 14px;
font-weight: 600;

&>div {
    display: flex;
    justify-content: space-between;
}


`
export const LabelStyled = styled.label`


`

export const InputStyled = styled.input`
width: 190px;
height: 24px;
border: 1px solid var(--blue);
border-radius: 12px;

`

export const FormEditor = styled(NavLink)`
position: absolute;
top: 10px;
right: 10px;

`