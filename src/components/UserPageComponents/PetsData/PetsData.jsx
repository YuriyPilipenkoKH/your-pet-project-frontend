import { PetsHeader, Title, NoPetsMessageWrapper } from "./PetsData.styled";
import AddPetBtn from "../../AddPetButton/AddPetButton";
import PetsList from "../PetsList/PetsList";

const PetsData = ({ state }) => {
    return (
        <>
            <PetsHeader>
                <Title>My pets:</Title>
                {/* <AddPetBtn text="Add pet" path="/add-pet" isFixed={false} /> */}
                <AddPetBtn state={state} />
            </PetsHeader>
            {/* <NoPetsMessageWrapper>
                <p>There are no animals added yet. Click button to add</p>
            </NoPetsMessageWrapper> */}
            {/* {!!pets.length && <PetsList pets={pets} />} */}
            <PetsList />
        </>
    );
};

export default PetsData;
