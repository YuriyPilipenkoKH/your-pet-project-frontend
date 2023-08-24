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

const UserPage = () => {
    const location = useLocation();
    return (
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
    );
};

export default UserPage;
