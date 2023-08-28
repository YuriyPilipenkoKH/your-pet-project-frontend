import {  useEffect, useState } from 'react';
import {
    iconClock,
    iconFem,
    iconHeart,
    iconMan,
    iconMap,
    iconTrash,
} from '../../images/icons';
import { ButtonTransparent, FavButton, TrashButton } from '../Button/Button';
import { Tab } from '../Tab/Tab';
import { CardTitle, CardWrapper, ImgWrapper } from './MainCard.styled';
import { CategoryWrapp } from '../Tab/Tab.styled';
import { modal1, modal2, modal3 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/notices-operations';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
// import { setAge } from 'redux/notices/notices-slice';

export const MainCard = ({
    index,
    title,
    // photo,
    name,
    sex,
    owner,
    idUsersAddedFavorite,
    petAvatarURL,
    location,
    category,
    birthday,
    type,
    comments,
   
    id,
}) => {
   
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)
    const { userId } = useAuth();
    // const [shouldReload, setShouldReload] = useState(false);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);
    const { isLoggedIn } = useAuth();
    const isTrashShown = userId === owner;
    
    const onModalClose = () => {
        setShowModal(false);
    };
    let isLike = null;
    if (idUsersAddedFavorite.includes(userId)) {
        isLike = index + 1;
    }

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    const checkRoute = () => {
        if (!isLoggedIn) {
            setModals(modal1);
            setShowModal(true);
        } else {
            if (idUsersAddedFavorite.includes(userId)) {
                dispatch(operations.fetchRemoveFavorite(id));
              }
                
                else {
                    dispatch(operations.fetchNoticesAddFavorite(id));

                  }
        }
    };

    const removeCard = () => {
      setModals(modal2);
      setShowModal(true);
    }

    
    const onLearnMore = () => {
        setModals(modal3);
        setShowModal(true);
    };
    //===========================
    function calculateAge(birthday) {
        const birthDate = new Date(birthday); // Parse birthday string into Date object
        const currentDate = new Date(); // Current date

        // Calculate age in years
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        // Adjust age if birth date hasn't occurred yet this year
        if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        // Format the age string based on the calculated age
        // dispatch(setAge(age))

        if (!age) {
            return `1 year`;
        } else if (age < 1) {
            return `0 years`;
        } else if (age === 1) {
            return `1 year`;
        } else {
            return `${age} years`;
        }
    }

    return (
        <CardWrapper>
            <ImgWrapper photo={petAvatarURL}>
                <CategoryWrapp className="category"> {category} </CategoryWrapp>
                <FavButton
                    className="fav"
                    isLike={isLike}
                    id="fav"
                    currentDiv={index + 1}
                    type="submit"
                    onClick={checkRoute}
                >
                    {' '}
                    {iconHeart}
                </FavButton>
                {isTrashShown && (
                    <TrashButton 
                    onClick ={removeCard}
                    className="del"> {iconTrash}</TrashButton>
                )}

                <Tab
                    className="tab1"
                    text={location || 'Somewhere'}
                    icon={iconMap}
                ></Tab>
                <Tab
                    className="tab2"
                    text={calculateAge(birthday) || '0 years'}
                    icon={iconClock}
                ></Tab>
                <Tab
                    className="tab3"
                    text={sex}
                    icon={sex === 'male' ? iconMan : iconFem}
                ></Tab>
            </ImgWrapper>

            <CardTitle> {title} </CardTitle>
            <ButtonTransparent onClick={onLearnMore}>
                {lang.learnmore}
            </ButtonTransparent>
            {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    checkRoute={checkRoute}
                    isOpen={showModal}
                    delid={id}
                    cardtitle={title}
                    petAvatarURL={petAvatarURL}
                    category={category}
                    location={location}
                    name={name}
                    birthday={birthday}
                    animal={type}
                    sex={sex}
                    comments={comments}
                    isLike={isLike}
                    currentDiv={index + 1}
                />
            )}
        </CardWrapper>
    );
};