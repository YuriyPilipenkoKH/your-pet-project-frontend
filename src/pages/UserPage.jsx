import UserData from '../components/UserPageComponents/UserData/UserData';
import PetsData from '../components/UserPageComponents/PetsData/PetsData';
import {
    UserPageWrapper,
    MainContent,
    TitleWrap,
    Title,
    Card,
} from './pages.styled/UserPage.styled';

const UserPage = () => {
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
                    <PetsData/>
                </div>
            </MainContent>
        </UserPageWrapper>
    );
};

export default UserPage;
