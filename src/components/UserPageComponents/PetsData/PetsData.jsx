import { PetsHeader, Title } from "./PetsData.styled";
import AddPetBtn from "../../AddPetButton/AddPetButton";
import {  useEffect, useState } from 'react';
import { useAll } from "hooks/useAll";
import { langEN, langUA } from "utils/languages";


const PetsData = ({ state }) => {
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    return (
        <>
            <PetsHeader>
                <Title> {lang.pets} </Title>
             
                <AddPetBtn state={state} />
            </PetsHeader>
         
        </>
    );
};

export default PetsData;
