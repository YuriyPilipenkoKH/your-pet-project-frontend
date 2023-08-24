import UserData from '../components/UserPageComponents/UserData/UserData';
import PetsData from '../components/UserPageComponents/PetsData/PetsData';
import {
    UserPageWrapper,
    MainContent,
    TitleWrap,
    Title,
    Card,
} from './pages.styled/UserPage.styled';
import { useLocation } from 'react-router-dom';
import {useEffect, useState } from "react";
import { useAuth } from 'hooks/useAuth';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { modal4 } from 'modals/modals';

const UserPage = () => {
    const location = useLocation();
    const {registrationSuccessful} = useAuth()
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        if (showModal && registrationSuccessful) {
          const timer = setTimeout(() => {
            setShowModal(false);
          }, 5000); // 5000 milliseconds = 5 seconds
    
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
                            <Title>My information:</Title>
                        </TitleWrap>
                        <Card>
                            <UserData/>
                        </Card>
                    </div>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <PetsData state={{ from: location }}/>
                    </div>
                </MainContent>
            </UserPageWrapper>

            {(showModal && registrationSuccessful ) &&
             <ModalPopup {...modal4}  onClose ={onModalClose} /> 
                   }
        </>
    );
};

export default UserPage;
