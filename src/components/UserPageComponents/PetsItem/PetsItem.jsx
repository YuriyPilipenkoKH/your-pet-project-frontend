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
import IconButton from '../IconButton/IconButton'
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import {ReactComponent as DeletePet} from '../../../images/userPageIcons/trash-2.svg'

const PetsItem = ({
    name, comments, type, id, petAvatarURL, birthday
}) => {
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
                            <IconButton
                                type="button"
                                icon={<DeletePet stroke="#54ADFF" />}
                            ></IconButton>
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
            {/* modalka */}
        </>
    );
};

export default PetsItem;
