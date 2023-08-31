

import PetsData from '../components/UserPageComponents/PetsData/PetsData';
import {
    UserPageWrapper,
    MainContent,
    TitleWrap,
    Title,
    Card,
} from './pages.styled/UserPage.styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { modal4 } from 'modals/modals';

import PetsItem from 'components/UserPageComponents/PetsItem/PetsItem';
import { useDispatch } from 'react-redux';
import petsOperations from '../redux/pets/petsOperations';
import { useAll } from 'hooks/useAll';
import { setRegToZero } from 'redux/auth/auth-slice';
import { langEN, langUA } from 'utils/languages';
import UserForm from 'components/Forms/FormUser/UserForm';
import { TempPetsItem } from 'components/UserPageComponents/TempPetsItem/TempPetsItem';


const UserPage = () => {
    const location = useLocation();
    const { registrationSuccessful } = useAuth();
    const { listPets, petsRerender } = useAll();
    const [showModal, setShowModal] = useState(true);
    const dispatch = useDispatch();

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])


    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(petsOperations.getPet())
        }, 2000);
        return () => clearTimeout(timer);
       
    }, [petsRerender]);

    useEffect(() => {
        if (showModal && registrationSuccessful) {
            const timer = setTimeout(() => {
                dispatch(setRegToZero())
                setShowModal(false);
            }, 3000); // 5000 milliseconds = 5 seconds

            return () => clearTimeout(timer);
        }
    }, [showModal, registrationSuccessful]);

    const onModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <UserPageWrapper>
                <MainContent>
                    <div>
                        <TitleWrap>
                            <Title> {lang.info} </Title>
                        </TitleWrap>
                        <Card>
                            <UserForm/>
                        </Card>
                    </div>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <PetsData
                            state={{ from: location }}
                          
                        />
                        

                        {listPets.length !== 0  ? listPets.map((item, index) => (
                            <PetsItem
                                key={index}
                                birthday={item.birthday}
                                name={item.name}
                                comments={item.comments}
                                type={item.type}
                                id={item._id}
                                petAvatarURL={item.petAvatarURL}
                            />

                        ))
                        : <TempPetsItem></TempPetsItem>
                    }
                    </div>
                </MainContent>
            </UserPageWrapper>

            {showModal && registrationSuccessful && (
                <ModalPopup
                    {...modal4}
                    onClose={onModalClose}
                    isOpen={showModal}
                    
                />
            )}
        </>
    );
};

export default UserPage;
