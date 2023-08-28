import { useEffect, useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { PhotoWrap, ProfileWrap, StyledLinkOut, UserWrap } from './UserNav.styled';
import { iconUser } from '../../images/icons';

import { StyledLink } from 'components/Button/Button.styled';

import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useAuth } from 'hooks/useAuth';
import { Avatar } from 'components/UserPageComponents/UserData/UserData.styled';

export const UserNav = ({ onClose }) => {
    const { language } = useAll();
    const { user, userName } = useAuth();
    const [lang, setLang] = useState(langUA);
    const avatar = user.avatarURL
    console.log('user',user)
    console.log('avatar', avatar)

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);

    const onModalClose = () => {
        setShowModal(false);
    };

  
    const signOut = () => {
        setModals(modal5);
        setShowModal(true);
    };

    return (
        <>
            <UserWrap className="UserNav">
                <ProfileWrap className="useravatar">
                    <StyledLink to="/profile" exact="true">
                    {iconUser}
                        
                     {/* {avatar ?   <Avatar style={{width: '50px' , height: '50px'}}
                                    src={avatar }
                                    alt="user avatar"
                                />
                     :  {iconUser}
                     }    */}
                   
                    {userName}{' '}
                    </StyledLink>
                </ProfileWrap>
                <StyledLinkOut
                    to="/"
                    exact="true"
                    onClick={signOut}
                    className="logout"
                >
                    {lang.outBtn} <MdOutlineLogout />
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
