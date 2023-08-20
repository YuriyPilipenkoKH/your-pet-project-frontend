import React, { useState } from 'react';
import {
    ButtonOption,
    Form,
    ItemOption,
    ItemStep,
    ListOption,
    ListSteps,
    Progres,
    TextStep,
    Title,
    WrapperNextBackButton,
} from '../../Forms.styled';
import { Button, ButtonTransparent } from '../../../Button/Button';
import { iconPawprint } from '../../../../images/icons';
import { BiArrowBack } from 'react-icons/bi';

export default function ChooseOption() {
    const [stepNumber, setStepNumber] = useState(1);
    const [active, setActive] = useState(1);
    const arraySteps = ['Choose  option', 'Personal details', 'More info'];
    const arrayOption = ['your pet', 'sell', 'lost/found', 'in good hands'];
    return (
        <Form chooseOption>
            <Title>Add pet</Title>
            <ListSteps>
                {arraySteps.map((step, index) => {
                    return (
                        <ItemStep key={index}>
                            <TextStep>{step}</TextStep>
                            <Progres
                                currentStep={index + 1}
                                stepNumber={stepNumber}
                            />
                        </ItemStep>
                    );
                })}
            </ListSteps>
            <ListOption>
                {arrayOption.map((step, index) => {
                    return (
                        <ItemOption key={index}>
                            <ButtonOption
                                onClick={() => setActive(index + 1)}
                                active={active}
                                currentActive={index + 1}
                                type='button'
                            >
                                {step}
                            </ButtonOption>
                        </ItemOption>
                    );
                })}
            </ListOption>
            <WrapperNextBackButton>
                <ButtonTransparent addPet>
                    <BiArrowBack /> Сancel
                </ButtonTransparent>
                <Button addPet>Next {iconPawprint}</Button>
            </WrapperNextBackButton>
        </Form>
    );
}
