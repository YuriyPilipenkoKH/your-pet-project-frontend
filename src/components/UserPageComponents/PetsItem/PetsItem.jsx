import {
    MyPetCard,
    InfoWrap,
    PetImage,
    NameWrapper,
    SubTitle,
    InfoItem,
    PetComment,
    InfoText,
} from './PetsItem.styled';
// import IconButton from '../IconButton/IconButton'
// import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import {ReactComponent as DeletePet} from '../../../images/userPageIcons/trash-2.svg'
import { Btn } from '../IconButton/IconButton.styled';
import {  useState } from 'react';
import { modal1, modal2 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';


const PetsItem = ({
    name, comments, type, id, petAvatarURL, birthday
}) => {

    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);

    const removePet = () => {
        
        setModals(modal2);
        setShowModal(true);
      }
      const onModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
                <MyPetCard>
                    <PetImage
                        src={petAvatarURL}
                        alt="mypet's avatar"
                    />
                    <InfoWrap style={{ maxWidth: 580 }}>
                        <NameWrapper>
                            <InfoItem>
                                <SubTitle>Name:&nbsp;</SubTitle>
                                <InfoText> {name} </InfoText>
                            </InfoItem>
                            <Btn 
                            onClick = {removePet}
                            type='button'>
                            <DeletePet stroke="#54ADFF" />
                               
                            </Btn>
                            {/* <IconButton
                                type="button"
                                icon={<DeletePet stroke="#54ADFF" />}
                            ></IconButton> */}
                        </NameWrapper>
                        <InfoItem>
                            <SubTitle>Date of birth:&nbsp; </SubTitle>
                            <InfoText> {birthday} </InfoText>
                        </InfoItem>
                        <InfoItem>
                            <PetComment>
                                Comments:&nbsp;
                                <InfoText> {comments} </InfoText>
                            </PetComment>
                        </InfoItem>
                    </InfoWrap>
                </MyPetCard>

                {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                    delid={id}
                    petAvatarURL={petAvatarURL}
                    name={name}
                    birthday={birthday}
                    animal={type}
                   comments={comments}
                   path= 'pet'
                    
                />
            )}
        </>
    );
};

export default PetsItem;
