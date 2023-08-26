import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'addPet' &&
        prop !== 'addPetMoreInformation',
})`
    padding: 40px 12px;
    padding: ${({ addPet }) => addPet && '20px 8px'};
    background: #fff;
    border-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    text-align: center;
    text-align: ${({ addPet }) => addPet && 'left'};
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 320px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        width: 608px;
        padding: 60px 75px;
        padding: ${({ addPet }) => addPet && '20px 32px'};
        width: ${({ addPet }) => addPet && '458px'};
        width: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '704px'};
    }
    @media screen and (min-width: 1280px) {
        width: 608px;
        padding: 60px 75px;
        padding: ${({ addPet }) => addPet && '20px 32px'};
        width: ${({ addPet }) => addPet && '458px'};
        padding: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '20px 73px'};
        width: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '820px'};
    }
`;

export const Title = styled.h3.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'chooseOption' &&
        prop !== 'addPetMoreInformation',
})`
    font-family: Manrope;
    font-size: 24px;
    line-height: normal;
    color: var(--black);
    font-weight: 500;
    text-align: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && 'center'};
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
        padding: 8px 16px;
        font-size: 14px;
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

export const Textarea = styled.textarea.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'withOutPrice',
})`
    display: block;
    width: 100%;
    border-radius: 20px;
    font-family: Manrope;
    padding: 8px 16px;
    color: var(--grey);
    resize: none;
    height: auto; /* Автоматична висота */
    min-height: 80px;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.64px;
    border: 1px solid var(--blue);
    overflow-y: hidden;
    overflow-x: hidden;
    @media screen and (min-width: 768px) {
        min-height: ${({ withOutPrice }) => (withOutPrice && "182px")};
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
    outline:none;
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
        prop !== 'image' &&
        prop !== 'addPetMoreInformation',
})`
    position: relative;
    display: block;
    margin-bottom: ${({ yourPet }) => (yourPet ? '44px' : '20px')};
    margin-bottom: ${({ coment }) => coment && '24px'};
    @media screen and (min-width: 768px) {
        margin-bottom: ${({ yourPet }) => (yourPet ? '40px' : '24px')};
        margin-bottom: ${({ coment }) => coment && '20px'};
        margin-bottom: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '0px'};
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

    outline:none;
 `;

export const TextValidation = styled.p.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addPet' && prop !== 'activeSex',
})`
    position: absolute;
    top: 50px;
    top: ${({ addPet }) => addPet && '101%'};
    top: ${({ activeSex }) => activeSex && '25%'};
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
        isPropValid(prop) &&
        prop !== 'iconPassowrd' &&
        prop !== 'addPet' &&
        prop !== 'addPetMoreInformation',
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
        left: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '350px'};
    }
`;
export const IconOkey = styled.svg.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'iconPassowrd' &&
        prop !== 'addPet' &&
        prop !== 'addPetMoreInformation',
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
        left: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '350px'};
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

export const ListOption = styled.ul.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'currentStep' &&
        prop !== 'addPetMoreInformation',
})`
    margin-bottom: 137px;
    display: ${({ addPetMoreInformation }) => addPetMoreInformation && 'flex'};
    margin-bottom: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && '10px'};
        @media screen and (min-width: 768px) {
            margin-bottom: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && '35px'};
        }
`;

export const ItemOption = styled.li.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'addPetMoreInformation',
})`
    margin-bottom: 12px;
    margin-bottom: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && '0'};
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
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${props =>
        props.currentActive === props.active ? 'var(--white)' : 'var(--blue)'};
    color: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && 'var(--grey)'};
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

export const ButtonSex = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'activeSex' && prop !== 'sex',
})`
    cursor: pointer;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    font-size: ${props =>
        props.sex === 'male' && props.activeSex === 'male'
            ? '14px'
            : props.sex === 'female' && props.activeSex === 'female'
            ? '14px'
            : '16px'};
    gap: 12px;
    color: ${props =>
        props.sex === 'male' && props.activeSex === 'male'
            ? 'var(--white)'
            : props.sex === 'female' && props.activeSex === 'female'
            ? 'var(--white)'
            : 'var(--grey)'};
    font-weight: 500;
    letter-spacing: 0.56px;
    background-color: ${props =>
        props.sex === 'male' && props.activeSex === 'male'
            ? 'var(--blue)'
            : props.sex === 'female' && props.activeSex === 'female'
            ? 'var(--red)'
            : 'transparent'};
    border-color: transparent;
    cursor: pointer;
    border-radius: 40px;
    & > svg > path {
        fill: transparent;
        stroke: ${props => {
            if (
                (props.sex === 'male' && props.activeSex === 'male') ||
                (props.sex === 'female' && props.activeSex === 'female')
            ) {
                return 'var(--white)';
            } else if (
                (props.sex === 'male' && props.activeSex === '') ||
                (props.sex === 'female' && props.activeSex === '')
            ) {
                return props.sex === 'male' ? 'var(--blue)' : 'var(--red)';
            } else {
                return 'var(--grey)';
            }
        }};
`;

export const SvgForMoreInformation = styled.svg.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'activeSex' && prop !== 'sex',
})`
    & > path {
        fill: transparent;
        stroke: ${props =>
            props.sex === 'male' && props.activeSex === 'male'
                ? 'var(--white)'
                : props.sex === 'female' && props.activeSex === 'female'
                ? 'var(--white)'
                : '#F43F5E'};
    }
`;

export const WrapperNextBackButton = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'addPetMoreInformation',
})`
    text-align: center;
    justify-content: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && 'center'};
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
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'addImage' &&
        prop !== 'addPetMoreInformation',
})`
    color: var(--black);
    display: inline-block;
    font-size: 14px;
    line-height: normal;
    font-weight: 500;
    margin-bottom: 4px;
    width: ${({ addImage }) => addImage && '33%'};
    @media screen and (min-width: 768px) {
        width: ${({ addPetMoreInformation }) => addPetMoreInformation && '100%'};
        font-size: 20px;
        line-height: 26.5px;
        margin-bottom: 8px;
    }
`;

export const LabelForAddImage = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'addPetMoreInformation',
})`
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;
    margin-bottom: 24px;
    margin-bottom: ${({ addPetMoreInformation }) =>
        addPetMoreInformation && '0'};
    @media screen and (min-width: 768px) {
        display: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && 'block'};
    }
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

export const WrapperForMoreInformation = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) && prop !== 'addPetMoreInformation',
})`
    gap: 80px;
    @media screen and (min-width: 768px) {
        gap: 45px;
        margin-bottom: ${({ addPetMoreInformation }) =>
            addPetMoreInformation && '60px'};
        display: flex;
    }
    @media screen and (min-width: 1280px) {
        gap: 80px;
    }
`;

export const WrapperForProgresMoreInformation = styled.div`
    width: 264px;
    margin-right: auto;
    margin-left: auto;
    @media screen and (min-width: 768px) {
        width: 392px;
    }
`;

export const WrapperForInputInMoreInformationOne = styled.div`
    width: 100%;
    position: relative;
    @media screen and (min-width: 768px) {
        width: 32%;
    }
    @media screen and (min-width: 1280px) {
        width: 30%;
    }
`;
export const WrapperForInputInMoreInformationTwo = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 62%;
    }
    @media screen and (min-width: 1280px) {
        width: 59%;
    }
`;
