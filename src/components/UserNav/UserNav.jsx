import { useEffect, useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import {
    PhotoWrap,
    ProfileWrap,
    StyledLinkOut,
    StyledUserLink,
    UserWrap,
} from './UserNav.styled';
import { iconUser } from '../../images/icons';
import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useAuth } from 'hooks/useAuth';

export const UserNav = ({ onClose }) => {
    const { language } = useAll();
    const { user, userName } = useAuth();
    const [lang, setLang] = useState(langUA);
    const avatar = user.avatarURL;

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
                    <StyledUserLink to = '/profile'
                        className="userlink"
                        exact="true"
                    >
                        {/* {iconUser} */}
                        {avatar ? (
                            <PhotoWrap src={avatar} alt="user avatar" />
                        ) : (
                            { iconUser }
                        )}
                        {userName}{' '}
                    </StyledUserLink>
                </ProfileWrap>
                <StyledLinkOut
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
