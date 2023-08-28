import React from 'react';
import {
    ButtonOption,
    Form,
    ItemOption,
    ListOption,
    Title,
    WrapperNextBackButton,
} from '../../Forms.styled';
import { Button, ButtonTransparent } from '../../../Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import { iconPawprint } from '../../../../images/icons';

export default function ChooseOption({
    children,
    active,
    activeOption,
    arrayOption,
    nextForm,
    beforeForm,
    stepNumber,
}) {
    return (
        <Form addPet>
            <Title addPet>Add pet</Title>
            {children}
            <ListOption>
                {arrayOption.map((option, index) => {
                    return (
                        <ItemOption key={index}>
                            <ButtonOption
                                onClick={() => {
                                    activeOption(index);
                                }}
                                active={active}
                                currentActive={index + 1}
                                type="button"
                            >
                                {option}
                            </ButtonOption>
                        </ItemOption>
                    );
                })}
            </ListOption>
            <WrapperNextBackButton>
                <ButtonTransparent addPet onClick={() => beforeForm()}>
                    <BiArrowBack /> {stepNumber > 1 ? 'Back' : 'Cancel'}
                </ButtonTransparent>
                <Button
                    stepNumber={stepNumber}
                    addPet
                    onClick={() => nextForm()}
                >
                    {stepNumber > 2 ? 'Done' : 'Next'} {iconPawprint}
                </Button>
            </WrapperNextBackButton>
        </Form>
    );
}
