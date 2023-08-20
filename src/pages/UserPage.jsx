import UserData from '../components/UserPageComponents/UserData/UserData';
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
                    <TitleWrap>
                        <Title>My pets:</Title>
                    </TitleWrap>
                    <p>pets info wrapper</p>
                </div>
            </MainContent>
        </UserPageWrapper>
    );
};

export default UserPage;
