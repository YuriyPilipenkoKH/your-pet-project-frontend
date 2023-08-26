import { useEffect, useState } from 'react';
import { MdOutlineLogout} from "react-icons/md";
import { ProfileWrap, StyledLinkOut, UserWrap } from './UserNav.styled';
import { iconUser } from '../../images/icons';
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import { StyledLink } from "components/Button/Button.styled";
import { toggleSell } from "redux/sort/sortSlice";
import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';

export const UserNav = ({onClose}) => {
  const [showModal, setShowModal] = useState(false);
  const [modals, setModals] = useState(modal1);

  const onModalClose = () => {
    setShowModal(false);
};

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const signOut = () => {
    setModals(modal5);
    setShowModal(true);

    // dispatch(toggleSell())
    // dispatch(authOperations.logOut())

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
