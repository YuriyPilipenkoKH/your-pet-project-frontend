import { PetsHeader, Title } from "./PetsData.styled";
import AddPetBtn from "../../AddPetButton/AddPetButton";
import {  useEffect, useState } from 'react';
import { useAll } from "hooks/useAll";
import { langEN, langUA } from "utils/languages";
// import PetsList from "../PetsList/PetsList";

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
                {/* <AddPetBtn text="Add pet" path="/add-pet" isFixed={false} /> */}
                <AddPetBtn state={state} />
            </PetsHeader>
            {/* <NoPetsMessageWrapper>
                <p>There are no animals added yet. Click button to add</p>
            </NoPetsMessageWrapper> */}
            {/* {!!pets.length && <PetsList pets={pets} />} */}
            {/* <PetsList /> */}
        </>
    );
};

export default PetsData;
