import { useEffect, useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { PhotoWrap, ProfileWrap, StyledLinkOut, UserWrap } from './UserNav.styled';
import { iconUser } from '../../images/icons';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { StyledLink } from 'components/Button/Button.styled';

import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useAuth } from 'hooks/useAuth';

export const UserNav = ({ onClose }) => {
    const { language } = useAll();
    const { user } = useAuth();
    const [lang, setLang] = useState(langUA);
    const avatar = user.avatarURL

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);

    const onModalClose = () => {
        setShowModal(false);
    };

    const name = useSelector(authSelectors.getUsername);
    const signOut = () => {
        setModals(modal5);
        setShowModal(true);
    };

    return (
        <>
            <UserWrap className="UserNav">
                <ProfileWrap className="useravatar">
                    <StyledLink to="/profile" exact="true">
                        <PhotoWrap 
                        src={avatar}  alt = 'alt'/>
                    {name}{' '}
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
