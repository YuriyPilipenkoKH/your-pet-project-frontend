import React, { useEffect } from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { useLocalStorage } from 'hooks/useLocalStaoreage';

export default function AddYourPet({
    children,
    nextForm,
    beforeForm,
    stepNumber,
}) {
    const [pet, setPet] = useLocalStorage("dataYourPet", {});
    const deliveryDataPet = data => {
        setPet(prevState => {
            return { ...prevState, ...data };
        });
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
