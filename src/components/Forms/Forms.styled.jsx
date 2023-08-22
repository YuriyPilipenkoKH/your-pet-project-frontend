import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImgD from '../../images/form-bg-d.png';
import bgImgD2 from '../../images/form-bg-d@2x.png';
import bgImgM from '../../images/form-bg-m.png';
import bgImgM2 from '../../images/form-bg-m@2x.png';
import bgImgT from '../../images/form-bg-t.png';
import bgImgT2 from '../../images/form-bg-m@2x.png';

export const Form = styled.div.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addPet',
})`
    padding: 40px 12px;
    background: #fff;
    border-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    text-align: center;
    text-align: ${({ addPet }) => addPet && 'left'};
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 320px) {
        width: 280px;
        padding: ${({ addPet }) => addPet && '20px 8px'};
        width: ${({ addPet }) => addPet && '280px'};
    }
    @media screen and (min-width: 768px) {
        width: 608px;
        padding: 60px 75px;
        padding: ${({ addPet }) => addPet && '20px 32px'};
        width: ${({ addPet }) => addPet && '458px'};
    }
`;

export const Title = styled.h3.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'chooseOption',
})`
    font-family: Manrope;
    font-size: 24px;
    line-height: normal;
    color: var(--black);
    font-weight: 500;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        font-size: 36px;
        margin-bottom: 40px;
        font-size: ${({ chooseOption }) => chooseOption && '28px'};
        margin-bottom: ${({ chooseOption }) => chooseOption && '24px'};
    }
`;

export const InputForAddPet = styled.input`
    display: block;
    width: 100%;
    border-radius: 40px;
    padding: 12px 16px;
    color: var(--grey);
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.64px;
    border: 1px solid var(--blue);
    @media screen and (max-width: 768px) {
        padding: '8px 16px';
        font-size: '14px';
    }

    &:focus {
        outline: none;
    }
`;

export const InputForAuthorization = styled.input`
    display: block;
    width: 100%;
    border-radius: 40px;
    padding: 12px 16px;
    color: var(--grey);
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.64px;
    border: 1px solid var(--blue);

    &:focus {
        outline: none;
    }
`;

export const InputUploadImage = styled.input`
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    outline: none;
    background-color: blue;
    position: absolute;
    opacity: 0;
    width: 112px;
    height: 112px;
    @media screen and (min-width: 768px) {
        width: 182px;
        height: 182px;
    }
`;

export const Textarea = styled.textarea`
    display: block;
    width: 100%;
    border-radius: 40px;
    font-family: Manrope;
    padding: 8px 16px;
    color: var(--grey);
    resize: none;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.64px;
    border: 1px solid var(--blue);
    scrollbar-color: var(--blue) transparent; /* Колір повзунка (голубий) і фону скроллу */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px; /* ширина скроллбара */
        height: 5px;
        border-radius: 50px;
        left: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--green);
        border-radius: 50px;
        height: 5px;
        left: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent; /* Фоновий колір трека скроллбара */
    }

    @media screen and (min-width: 768px) {
        padding: 12px 16px;
    }

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

export const LabelForAdd = styled.label.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'yourPet' &&
        prop !== 'coment' &&
        prop !== 'image',
})`
    position: relative;
    display: block;
    margin-bottom: ${({ yourPet }) => (yourPet ? '44px' : '20px')};
    margin-bottom: ${({ coment }) => coment && '24px'};
    @media screen and (min-width: 768px) {
        margin-bottom: ${({ yourPet }) => (yourPet ? '40px' : '24px')};
        margin-bottom: ${({ coment }) => coment && '17px'};
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
        left: 210px;
    }
    @media screen and (min-width: 768px) {
        left: 400px;
    }
`;

export const TextValidation = styled.p.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addPet',
})`
    position: absolute;
    top: 50px;
    top: ${({ addPet }) => addPet && '101%'};
    left: 20px;
    color: var(--red);
    font-size: 12px;
    font-weight: 500;
    display: none;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }
`;

export const IconCrossValidate = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'iconPassowrd' && prop !== 'addPet',
})`
    position: absolute;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    top: 20%;
    top: ${({ addPet }) => addPet && '50%'};
    left: ${({ iconPassowrd }) => (iconPassowrd ? '73%' : '82%')};
    @media screen and (min-width: 320px) {
        left: ${({ iconPassowrd }) => (iconPassowrd ? '180px' : '210px')};
        top: ${({ addPet }) => addPet && '50%'};
    }
    @media screen and (min-width: 768px) {
        top: ${({ addPet }) => addPet && '55%'};
        left: ${({ iconPassowrd }) => (iconPassowrd ? '370px' : '400px')};
        left: ${({ addPet }) => addPet && '345px'};
    }
`;
export const IconOkey = styled.svg.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'iconPassowrd' && prop !== 'addPet',
})`
    position: absolute;
    top: 25%;
    left: ${({ iconPassowrd }) => (iconPassowrd ? '73%' : '82%')};
    top: ${({ addPet }) => addPet && '50%'};
    @media screen and (min-width: 320px) {
        left: ${({ iconPassowrd }) => (iconPassowrd ? '190px' : '220px')};
        top: ${({ addPet }) => addPet && '50%'};
    }
    @media screen and (min-width: 768px) {
        left: ${({ iconPassowrd }) => (iconPassowrd ? '380px' : '410px')};
        left: ${({ addPet }) => addPet && '350px'};
        top: ${({ addPet }) => addPet && '55%'};
    }
`;

export const ListSteps = styled.ul`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
`;

export const ItemStep = styled.li`
    margin-right: 12px;
    &:last-child {
        margin-right: 0px;
    }
    width: calc((100% - 2 * 12px) / 3);
    @media screen and (min-width: 768px) {
        margin-right: 12px;
        width: calc((100% - 2 * 12px) / 3);
    }
`;

export const TextStep = styled.p.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'currentStep' && prop !== 'stepNumber',
})`
    color: var(--blue);
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    line-height: normal;
    color: ${props =>
        props.currentStep === props.stepNumber
            ? 'var(--blue)'
            : props.currentStep < props.stepNumber
            ? 'var(--green)'
            : 'var(--light-blue)'};
    @media screen and (min-width: 768px) {
        line-height: 26.5px;
        font-size: 16px;
    }
`;

export const Progres = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'currentStep' && prop !== 'stepNumber',
})`
    width: 100%;
    height: 8px;
    background-color: ${props =>
        props.currentStep === props.stepNumber
            ? 'var(--blue)'
            : props.currentStep < props.stepNumber
            ? 'var(--green)'
            : 'var(--light-blue)'};
    border-radius: 8px;
`;

export const ListOption = styled.ul`
    margin-bottom: 137px;
`;

export const ItemOption = styled.li`
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0px;
    }
`;

export const ButtonOption = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'active' && prop !== 'currentActive',
})`
    cursor: pointer;
    padding: 8px 16px;
    color: ${props =>
        props.currentActive === props.active ? 'var(--white)' : 'var(--blue)'};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.56px;
    background-color: ${props =>
        props.currentActive === props.active
            ? 'var(--blue)'
            : 'var(--light-blue)'};
    border-color: transparent;
    cursor: pointer;
    border-radius: 40px;
`;

export const WrapperNextBackButton = styled.div`
    text-align: center;
    display: flex;
    @media screen and (min-width: 0px) and (max-width: 768px) {
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column-reverse;
    }
    gap: 2px;
    @media screen and (min-width: 768px) {
        gap: 10px;
    }
`;

export const TypeInput = styled.span.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addImage',
})`
    color: var(--black);
    display: inline-block;
    font-size: 14px;
    line-height: normal;
    font-weight: 500;
    margin-bottom: 4px;
    width: ${({ addImage }) => addImage && '33%'};
    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 26.5px;
        margin-bottom: 8px;
    }
`;

export const LabelForAddImage = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;
    margin-bottom: 24px;
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const PlusImage = styled.svg`
    width: 112px;
    height: 112px;
    @media screen and (min-width: 768px) {
        width: 182px;
        height: 182px;
    }
`;

export const ImagePet = styled.img`
    width: 112px;
    height: 112px;
    border-radius: 20px;
    @media screen and (min-width: 768px) {
        width: 182px;
        height: 182px;
    }
`;
