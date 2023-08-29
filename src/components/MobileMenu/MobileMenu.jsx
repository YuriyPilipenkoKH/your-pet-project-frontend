import {  useEffect, useState } from 'react';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { CloseButton, MenuContent, MenuHeader, MenuWrapp } from './MobileMenu.styled';
import { StyledLogo } from '../Button/Button.styled';
import { iconLogo, iconUser } from '../../images/icons';
import { RxCross2 } from "react-icons/rx";

import { ProfileWrap, StyledLinkOut, StyledUserLink } from 'components/UserNav/UserNav.styled';
import {  useSelector } from "react-redux";
import { authSelectors } from 'redux/auth';
import { MdOutlineLogout} from "react-icons/md";
import { useAuth } from 'hooks/useAuth';
import { } from 'redux/sort/sortSlice';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { modal1, modal5 } from 'modals/modals';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { Avatar } from 'components/UserPageComponents/UserData/UserData.styled';


export  const MobileMenu = ({ isOpen, onClose }) => {

  const { language} = useAll()
  const [lang, setLang] = useState(langUA)

  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

  const [showModal, setShowModal] = useState(false);
  const [modals, setModals] = useState(modal1);


const {isLoggedIn, userId, userName , user} = useAuth()
const avatar = user.avatarURL




   const signOut = () => {
    setModals(modal5);
    setShowModal(true);

    // dispatch(toggleSell())
    // dispatch(authOperations.logOut())

  }
  const onModalClose = () => {
    setShowModal(false);
};

  return (
    <MenuWrapp className= {isOpen ? ['menu', 'active'].join(' ') : 'menu'} >
            <MenuHeader className='MenuHeader'>
                <StyledLogo to="/" onClick={()=>console.log('name', userName , 'userId',userId)}  >{iconLogo}</StyledLogo>
               <CloseButton onClick={onClose} ><RxCross2/></CloseButton>
            </MenuHeader>
        <MenuContent className='MenuContent'>
            {!isLoggedIn 
            ? <AuthNav   onClose={onClose}/> 
            :   <>
                  <ProfileWrap className= "useravatar" > 
                  {avatar ?   <StyledUserLink 
                                onClick={onClose}
                                to = '/profile'  
                                exact="true" >
                    <Avatar style={{width: '50px' , height: '50px'}}
                                      src={avatar }
                                      alt="user avatar"
                                  />
                  </StyledUserLink>
                     :  {iconUser}
                     }   
                  {userName } </ProfileWrap>
                 <StyledLinkOut to="/" exact="true"  onClick={signOut} className='logout'>
                   {lang.outBtn} <MdOutlineLogout/>
                 </StyledLinkOut>
               </>  }

               < Nav onClose={onClose}/>
        </MenuContent>
        {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                                   />
            )}
    </MenuWrapp>
  );
};
// <AuthNav   onClose={onClose}/>
// <UserNav   onClose={onClose}/>
