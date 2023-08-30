import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserFormWrap = styled.div`
    position: relative;
    width: 280px;
    height: 517px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    padding: 0 12px;

    @media screen and (min-width: 768px) {
        width: 704px;
        height: 268px;
        flex-direction: row-reverse;
        justify-content: start;
        gap: 80px;
        padding: 16px;
    }
    @media screen and (min-width: 1280px) {
        width: 400px;
        height: 520px;
        justify-content: start;
        flex-direction: column;
        gap: 12px;
        padding: 20px;
    }
`;
export const FormStyled = styled.form`
    display: grid;
    gap: 16px;
    font-size: 14px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        justify-self: start;
        width: 355px;
        height: 190px;
        gap: 12px;
        font-size: 18px;
    }

    & > div {
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > a.logoutBtn {
        width: 140px;
        background-color: transparent;
        border: none;
        color: var(--button-color-loguut);
        color: var(--text-color);
        transition: all 0.4ms ease-in-out;
        transition: color 1s ease-in-out;
        &:hover {
            transition: all 0.4ms ease-in-out;
            color: #eee;

            & > svg {
                transition: all 0.4ms ease-in-out;
                fill: #eee;
            }
        }
        & > svg {
            fill: var(--blue);
        }
    }

    & > button.saveBtn {
        margin: 0 auto;
        width: 240px;
        height: 31px;

        @media screen and (min-width: 768px) {
            margin: 0;
            position: absolute;
            bottom: 10px;
            left: 116px;
            width: 255px;
        }

        @media screen and (min-width: 1280px) {
            position: static;
            justify-self: end;
            width: 255px;
            height: 40px;
            /* bottom: 0; */
            /* margin-left: auto; */
            /* right: 30px; */
        }
    }
`;

export const LabelStyled = styled.label`

  white-space: nowrap;
  overflow: hidden;
  max-width: 60px;
  text-overflow: ellipsis; 
  font-size: 12px;
  color: var(--text-color);
  transition: all 1s ease-in-out;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        max-width: 95px;
    }

    color: var(--text-color);

`;

export const InputStyled = styled.input`
    width: 190px;
    height: 24px;
    border: 1px solid var(--blue);
    border-radius: 20px;
    padding: 4px 12px;
    

    color: var(--text-color);
    background-color: var(--background-color-input);

    @media screen and (min-width: 768px) {
        width: 255px;
        height: 30px;
    }

    &:disabled {
        background-color: transparent;
        color: var(--text-color);
    }

    &:focus {
        outline: none;
    }
`;

export const FormEditor = styled(NavLink)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        top: 20px;
        right: 20px;
    }

    & > svg {
        fill: var(--blue);
    }
    &> svg.iconCross{
        transition: all 1s ease-in-out;
        stroke: var(--text-color);
    }
`;
export const UserPhotoWrap = styled.div`
    display: grid;
    place-items: center;
    grid-template-rows: 182px auto;
    gap: 2px;
    height: 225px;

    & > input {
        width: 180px;
        height: 180px;
        background-color: #7775;
        border-radius: 40px;
    }
`;
