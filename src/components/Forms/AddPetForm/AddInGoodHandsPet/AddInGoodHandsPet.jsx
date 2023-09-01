
import {  useEffect, useState , useRef} from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/notices-operations';
import { toast } from 'react-toastify';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export default function AddInGoodHandsPet({
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
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backLinkLocation = useRef(state?.from ?? '/');
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    const clearAllInput = () => {
        clearInput("nameHands");
        clearInput("birthHands");
        clearInput("typeHands");
        clearInput("comentHands");
        clearInput("titleHands");
        clearInput("priceHands");
        clearInput("locationHands");
        clearInput("activeHands");
        clearInput("imageUrlHands");
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
