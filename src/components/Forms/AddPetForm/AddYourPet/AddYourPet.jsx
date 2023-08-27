import React, { useRef } from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/notices/notices-operations';
import { useDispatch } from 'react-redux';

export default function AddYourPet({
    children,
    nextForm,
    beforeForm,
    stepNumber,
    state,
    clearStepNumber,
    clearData
}) {
    const [pet, setPet] = useLocalStorage("dataYourPet", {});
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backLinkLocation = useRef(state?.from ?? '/');
    const deliveryDataPet = data => {
        setPet(prevState => {
            return { ...prevState, ...data };
        });
        if (stepNumber === 3) {
            const formData = new FormData();
            console.log({ ...pet, ...data })
            for (const key in { ...pet, ...data }) {
                formData.append(key, { ...pet, ...data }[key]);
            };
            dispatch(operations.addMySelfPet(formData));
            navigate(backLinkLocation.current);
            console.log("right")
            clearStepNumber();
            clearData("dataYourPet");
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
