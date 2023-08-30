import { NotfoundContent } from '../components/Notfound/NotfoundCont';
import { Notfound } from './pages.styled/Pages.styled';

const NotfoundPage = () => {
    return (
        <Notfound className="notfoundWrap">
            <NotfoundContent />
        </Notfound>
    );
};

export default NotfoundPage;