import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.div`
    padding: 40px 12px;
    background: #fff;
    border-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    text-align: center;
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 320px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        width: 600px;
        padding: 60px 75px;
    }
`;

export const Title = styled.h3`
    font-family: Manrope;
    font-size: 24px;
    line-height: normal;
    color: var(--black);
    font-weight: 500;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        font-size: 36px;
    }
`;

export const Input = styled.input.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'inputInLabel',
})`
    display: block;
    width: 100%;
    border-radius: 40px;
    padding: 12px 16px;
    color: var(--grey);
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.64px;
    border: 1px solid var(--blue);
    position: relative;

    &:focus {
        outline: none;
    }

    
`;

export const ButtonSubmit = styled.button.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'loginButtom',
})`
    width: 100%;
    padding: 10px 28px;
    border-radius: 40px;
    border: transparent;
    background-color: var(--blue);
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.8px;
    cursor: pointer;
    transition: background 500ms;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
        margin-bottom: ${({ loginButtom }) => (loginButtom ? '20px' : '16px')};
    }
    &:hover {
        background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    }
`;

export const Question = styled.p`
    color: var(--grey);
    font-size: 12px;
    letter-spacing: 0.48px;
`;

export const LinkToForm = styled(Link)`
    color: var(--blue);
    font-size: 12px;
    letter-spacing: 0.48px;
    text-decoration-line: underline;
`;

export const LabelForRegistration = styled.label.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'registration',
})`
    position: relative;
    display: block;
    margin-bottom: ${({ registration }) => (registration ? '40px' : '14px')};
    @media screen and (min-width: 768px) {
        margin-bottom: ${({ registration }) =>
            registration ? '52px' : '32px'};
    }
    @media screen and (min-width: 1280px) {
        margin-bottom: ${({ registration }) =>
            registration ? '40px' : '32px'};
    }
`;

export const LabelForLogin = styled.label.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'login',
})`
    position: relative;
    display: block;
    margin-bottom: ${({ login }) => (login ? '110px' : '40px')};
    @media screen and (min-width: 768px) {
        margin-bottom: ${({ login }) => (login ? '60px' : '32px')};
    }
`;

export const ShowPasswordButton = styled.button`
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 20%;
    left: 82%;
    @media screen and (min-width: 320px) {
        top: 20%;
        left: 210px;
    }
    @media screen and (min-width: 768px) {
        top: 20%;
        left: 400px;
    }
`;

export const TextValidation = styled.p`
    position: absolute;
    top: 50px;
    left: 20px;
    color: var(--red);
    font-size: 12px;
    font-weight: 500;
`;
