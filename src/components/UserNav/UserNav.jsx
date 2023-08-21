
import { StyledLinkReg } from '../AuthNav/AuthNav.styled';
import { MdOutlineLogout} from "react-icons/md";

import { StyledLinkOut, UserWrap } from './UserNav.styled';

export const UserNav = ({onClose}) => {
  return (
    <UserWrap className= "UserNav">
      <StyledLinkReg >
        Register
      </StyledLinkReg>
      <StyledLinkOut to="/" exact="true"  onClick={onClose}>
        Log out <MdOutlineLogout/>
      </StyledLinkOut>
    </UserWrap>
  );
};
