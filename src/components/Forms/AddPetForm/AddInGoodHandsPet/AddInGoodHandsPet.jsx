import React, { useRef } from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useNavigate } from 'react-router-dom';

export default function AddInGoodHandsPet({
    children,
    nextForm,
    beforeForm,
    stepNumber,
    state,
    clearStepNumber
}) {
    const [pet, setPet] = useLocalStorage("dataSellPet", {});
    const navigate = useNavigate()
    const backLinkLocation = useRef(state?.from ?? '/');
    const deliveryDataPet = data => {
        setPet(prevState => {
            return { ...prevState, ...data };
        });
        if (stepNumber === 3) {
            navigate(backLinkLocation.current)
            clearStepNumber();
        }
    };
    return (
        <>
        {stepNumber === 2 && (
            <PersonalDetails
                children={children}
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
                deliveryDataPet={deliveryDataPet}
            />
        )}
        {stepNumber === 3 && (
            <MoreInfo
                children={children}
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
                deliveryDataPet={deliveryDataPet}
            />
        )}
    </>
    );
}
