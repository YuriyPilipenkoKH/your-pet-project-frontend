import {  useState } from 'react';
import { MdOutlineLogout} from "react-icons/md";
import { ProfileWrap, StyledLinkOut, UserWrap } from './UserNav.styled';
import { iconUser } from '../../images/icons';
import {  useSelector } from "react-redux";
import {  authSelectors } from "redux/auth";
import { StyledLink } from "components/Button/Button.styled";

import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';

export const UserNav = ({onClose}) => {
  const [showModal, setShowModal] = useState(false);
  const [modals, setModals] = useState(modal1);

  const onModalClose = () => {
    setShowModal(false);
};


  const name = useSelector(authSelectors.getUsername);
  const signOut = () => {
    setModals(modal5);
    setShowModal(true);


  }

  return (
    <>
    <UserWrap className= "UserNav">
      <ProfileWrap className= "useravatar" > 
      <StyledLink to="/profile" exact="true" >{iconUser} </StyledLink>
      {name} </ProfileWrap>
      <StyledLinkOut to="/" exact="true"  onClick={signOut} className='logout'>
        Log out <MdOutlineLogout/>
      </StyledLinkOut>
    </UserWrap>
    {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                                   />
            )}
    </>
  );
};
