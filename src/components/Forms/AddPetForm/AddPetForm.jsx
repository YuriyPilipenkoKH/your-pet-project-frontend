import React, { useState } from 'react';
import ChooseOption from './ChooseOption/ChooseOption';
import ListProgresSteps from './ListSteps/ListProgresSteps';

export default function AddPetForm() {
    const [stepNumber, setStepNumber] = useState(1);
    const [active, setActive] = useState(1);
    const nextForm = () => {
        setStepNumber(stepNumber + 1);
    };
    const beforeForm = () => {
        setStepNumber(stepNumber - 1);
    };
    const activeOption = index => {
        setActive(index + 1);
    };
    const arraySteps = ['Choose  option', 'Personal details', 'More info'];
    const arrayOption = ['your pet', 'sell', 'lost/found', 'in good hands'];
    return (
        <ChooseOption
            active={active}
            activeOption={activeOption}
            arrayOption={arrayOption}
            nextForm={nextForm}
            beforeForm={beforeForm}
            stepNumber={stepNumber}
        >
            <ListProgresSteps arraySteps={arraySteps} stepNumber={stepNumber} />
        </ChooseOption>
    );
}
