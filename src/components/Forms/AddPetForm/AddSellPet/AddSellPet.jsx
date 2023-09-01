import React, { useRef ,useEffect, useState} from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/notices-operations';
import { toast } from 'react-toastify';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export default function AddSellPet({
    children,
    nextForm,
    beforeForm,
    stepNumber,
    state,
    clearStepNumber,
    clearData,
    clearInput
}) {
    const [pet, setPet] = useLocalStorage("dataSellPet", {});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const backLinkLocation = useRef(state?.from ?? '/');

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
    const clearAllInput = () => {
        clearInput("nameSell");
        clearInput("birthSell");
        clearInput("typeSell");
        clearInput("comentSell");
        clearInput("titleSell");
        clearInput("priceSell");
        clearInput("locationSell");
        clearInput("activeSell");
        clearInput("imageUrlSell");
    };
    const deliveryDataPet = data => {
        setPet(prevState => {
            return { ...prevState, ...data };
        });
        if (stepNumber === 3) {
            const formData = new FormData();
            for (const key in { ...pet, ...data }) {
                formData.append(key, { ...pet, ...data }[key]);
            }
            dispatch(operations.fetchAddNotice(formData)).then(() => {
                toast.success(lang.Petadded);
            })
            .catch(() => {
                toast.error(lang.wrong);
            });
            navigate(backLinkLocation.current);
            clearStepNumber();
            clearData("dataSellPet");
            clearAllInput();
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
