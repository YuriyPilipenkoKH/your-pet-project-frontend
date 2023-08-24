import React, { useRef } from 'react';
import ChooseOption from './ChooseOption/ChooseOption';
import ListProgresSteps from './ListSteps/ListProgresSteps';
import AddYourPet from './AddYourPet/AddYourPet';
import AddSellPet from './AddSellPet/AddSellPet';
import AddLostPet from './AddLostPet/AddLostPet';
import AddInGoodHandsPet from './AddInGoodHandsPet/AddInGoodHandsPet';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useNavigate } from 'react-router-dom';

export default function AddPetForm({ state }) {
    const [stepNumber, setStepNumber] = useLocalStorage('stepNumber', 1);
    const [active, setActive] = useLocalStorage('active', 1);
    const navigate = useNavigate();
    const backLinkLocation = useRef(state?.from ?? '/');
    const nextForm = () => {
        setStepNumber(prevState => {
            return prevState + 1;
        });
    };
    const beforeForm = () => {
        if (stepNumber === 1) {
            navigate(backLinkLocation.current);
            return;
        }
        setStepNumber(prevState => {
            return prevState - 1;
        });
    };
    const clearStepNumber = () => {
        JSON.parse(localStorage.getItem('stepNumber'));
        localStorage.setItem('stepNumber', JSON.stringify(1));
    };
    const activeOption = index => {
        setActive(index + 1);
    };
    const arraySteps = ['Choose  option', 'Personal details', 'More info'];
    const arrayOption = ['your pet', 'sell', 'lost/found', 'in good hands'];
    return (
        <>
            {stepNumber === 1 && (
                <ChooseOption
                    active={active}
                    activeOption={activeOption}
                    arrayOption={arrayOption}
                    nextForm={nextForm}
                    beforeForm={beforeForm}
                    stepNumber={stepNumber}
                >
                    <ListProgresSteps
                        arraySteps={arraySteps}
                        stepNumber={stepNumber}
                    />
                </ChooseOption>
            )}
            {stepNumber >= 2 && active === 1 && (
                <AddYourPet
                    nextForm={nextForm}
                    beforeForm={beforeForm}
                    stepNumber={stepNumber}
                    state={state}
                    clearStepNumber={clearStepNumber}
                >
                    <ListProgresSteps
                        arraySteps={arraySteps}
                        stepNumber={stepNumber}
                    />
                </AddYourPet>
            )}
            {stepNumber >= 2 && active === 2 && (
                <AddSellPet
                    nextForm={nextForm}
                    beforeForm={beforeForm}
                    stepNumber={stepNumber}
                    state={state}
                    clearStepNumber={clearStepNumber}
                >
                    <ListProgresSteps
                        arraySteps={arraySteps}
                        stepNumber={stepNumber}
                    />
                </AddSellPet>
            )}
            {stepNumber >= 2 && active === 3 && (
                <AddLostPet
                    nextForm={nextForm}
                    beforeForm={beforeForm}
                    stepNumber={stepNumber}
                    state={state}
                    clearStepNumber={clearStepNumber}
                >
                    <ListProgresSteps
                        arraySteps={arraySteps}
                        stepNumber={stepNumber}
                    />
                </AddLostPet>
            )}
            {stepNumber >= 2 && active === 4 && (
                <AddInGoodHandsPet
                    nextForm={nextForm}
                    beforeForm={beforeForm}
                    stepNumber={stepNumber}
                    state={state}
                    clearStepNumber={clearStepNumber}
                >
                    <ListProgresSteps
                        arraySteps={arraySteps}
                        stepNumber={stepNumber}
                    />
                </AddInGoodHandsPet>
            )}
        </>
    );
}
