import { NotfoundContent } from "../components/Notfound/NotfoundCont";
import { Notfound } from "./pages.styled/Pages.styled";



export const NotfoundPage = () => {
    return (
        <Notfound NotfoundWrap className="notfoundWrap">
            
            <NotfoundContent/>
            
        </Notfound>
    );
};
