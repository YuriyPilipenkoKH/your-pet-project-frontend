
import { MdOutlineLogout} from "react-icons/md";
import { ProfileWrap, StyledLinkOut, UserWrap } from './UserNav.styled';
import { iconUser } from '../../images/icons';

export const UserNav = ({onClose}) => {
  return (
    <UserWrap className= "UserNav">
      <ProfileWrap className= "useravatar" > {iconUser} {'John'} </ProfileWrap>
      <StyledLinkOut to="/" exact="true"  onClick={onClose} className='logout'>
        Log out <MdOutlineLogout/>
      </StyledLinkOut>
    </UserWrap>
  );
};
