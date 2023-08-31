import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { RxCross2 } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    BtnContainer,
    BtnContainer3,
    ContentWrapp,
    ModalCategory,
    ModalContainer,
    ModalContainer3,
    ModalImage,
    ModalOverlay,
    ModalText,
    ModalTitle,
    ModalTitle3,
    OnCloseButton,
    PetList,
} from './ModalPopup.styled';
import {
    AddFavButton,
    Button,
    ButtonTransparent,
    ContactButton,
    OutButton,
} from '../Button/Button';
import noticesOperations from '../../redux/notices/notices-operations';
import { setModalClose, setModalOpen } from 'redux/modal/modalSlice';
import { useAll } from 'hooks/useAll';
import { toggleSell } from 'redux/sort/sortSlice';
import { authOperations } from 'redux/auth';
import { langEN, langUA } from 'utils/languages';
import petsOperations from '../../redux/pets/petsOperations';
import { StyledLink } from 'components/Button/Button.styled';
import { iconPawprint } from 'images/icons';
import { setRegToZero } from 'redux/auth/auth-slice';
import {
    StyledLinkLog,
    StyledLinkReg,
} from 'components/AuthNav/AuthNav.styled';
import { toast } from 'react-toastify';

const modalRoot = document.querySelector('#modal-root');

export const ModalPopup = ({
    type,
    path,
    delid,
    isOpen,
    checkRoute,
    widthm,
    heightm,
    widthd,
    heightd,
    title,
    text,
    image,
    btnsizem,
    btnsized,
    btn1,
    btn2,
    onClose,
    cardtitle,
    petAvatarURL,
    category,
    location,
    name,
    birthday,
    sex,
    animal,
    comments,
    isLike,
    currentDiv,
}) => {
    const props = {
        type,
        widthm,
        heightm,
        widthd,
        heightd,
        title,
        text,
        image,
        btnsizem,
        btnsized,
        delid,
    };

    const { language } = useAll();
    const [lang, setLang] = useState(langUA);
    // const { modalIsOpen } = useAll();
    const dispatch = useDispatch();

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);

    useEffect(() => {
        if (isOpen) {
            dispatch(setModalOpen());
        }
        if (!isOpen) {
            dispatch(setModalClose());
        }
    }, [dispatch, isOpen]);

    useEffect(() => {
        const handleBackdropClick = e => {
            if (e.target.classList.contains('modal-backdrop')) {
                dispatch(setModalClose());
                onClose();
            }
        };

        const handleKeyDown = e => {
            if (e.keyCode === 27) {
                dispatch(setModalClose());
                onClose();
            }
        };

        const body = document.body;
        body.style.overflow = 'hidden';

        window.addEventListener('click', handleBackdropClick);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            body.style.overflow = 'unset';
            window.removeEventListener('click', handleBackdropClick);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const shut = () => {
        dispatch(setModalClose());
        onClose();
    };
    const shutRegSuccess = () => {
        dispatch(setModalClose());
        dispatch(setRegToZero());
        onClose();
    };

    const removeCard = () => {
        if (path === 'notice') {
            dispatch(noticesOperations.fetchDeleteNotice(delid))
                .then(() => {
                    toast.success(`The animal was successfully removed`);
                })
                .catch(() => {
                    toast.error('Something went wrong');
                });
            dispatch(setModalClose());
            onClose();
        } else if (path === 'pet') {
            dispatch(petsOperations.removeMyPet(delid));
            dispatch(setModalClose());
            onClose();
        }
    };

    const exit = () => {
        onClose();
        dispatch(toggleSell());
        dispatch(setModalClose());
        dispatch(authOperations.logOut())
            .unwrap()
            .then(originalPromiseResult => {
                toast.success(
                    `${originalPromiseResult.user.name} Logout  successfull!`
                );
            })
            .catch(() => {
                toast.error('Incorrect logout operation');
            });
    };
   

    if (type === 1) {
        return createPortal(
            <ModalOverlay
                className={`modal ${isOpen ? 'active' : 'modal-backdrop'}`}
            >
                <ModalContainer {...props}>
                    <ModalTitle>{lang.attention}</ModalTitle>
                    <ModalText>{lang.reminder}</ModalText>
                    <BtnContainer {...props}>
                        <StyledLinkLog to="/login" exact="true">
                            {lang.logBtn} {iconPawprint}{' '}
                        </StyledLinkLog>
                        <StyledLinkReg to="/register" exact="true">
                            {lang.regBtn}{' '}
                        </StyledLinkReg>
                    </BtnContainer>
                    <OnCloseButton onClick={shut}>
                        <RxCross2 />
                    </OnCloseButton>
                </ModalContainer>
            </ModalOverlay>,
            modalRoot
        );
    }
    if (type === 2) {
        return createPortal(
            <ModalOverlay
                className={`modal ${
                    isOpen
                        ? ['active', 'modal-backdrop'].join(' ')
                        : 'modal-backdrop'
                }`}
            >
                <ModalContainer {...props}>
                    <ModalTitle>{lang.deleteadverstiment} </ModalTitle>
                    <ModalText>
                        {lang.suretodelete} {name || 'Your pet'} ?{lang.youcant}{' '}
                    </ModalText>

                    <BtnContainer {...props}>
                        <ButtonTransparent onClick={shut}>
                            {lang.cancel}
                        </ButtonTransparent>
                        <Button onClick={removeCard}>
                            {lang.yes} <RiDeleteBin6Line />{' '}
                        </Button>
                        ,
                    </BtnContainer>
                    <OnCloseButton onClick={shut}>
                        <RxCross2 />
                    </OnCloseButton>
                </ModalContainer>
            </ModalOverlay>,
            modalRoot
        );
    }
    if (type === 3) {
        return createPortal(
            <ModalOverlay
                className={`modal ${
                    isOpen
                        ? ['active', 'modal-backdrop'].join(' ')
                        : 'modal-backdrop'
                }`}
            >
                <ModalContainer3>
                    {image && (
                        <ModalImage src={petAvatarURL} alt="Modal Image" />
                    )}
                    <ModalCategory> {category} </ModalCategory>

                    <ContentWrapp>
                        <ModalTitle3>{title}</ModalTitle3>
                        <PetList>
                            <p> {lang.name} </p> <span>{name} </span>
                            <p> {lang.birthday} </p> {birthday}
                            <p> {lang.type} </p> <span>{animal}</span>
                            <p> {lang.place} </p> <span> {location} </span>
                            <p> {lang.sex} </p> {sex}
                            <p className="userContact"> {lang.email} </p>{' '}
                            <span>
                                {' '}
                                <a href="mailto:alex@gmail.com">
                                    {' '}
                                    {'alex@gmail.com'}
                                </a>{' '}
                            </span>
                            <p className="userContact"> {lang.phone} </p>{' '}
                            <span>
                                {' '}
                                <a href="tel:+380971234567">
                                    {'+380971234567'}
                                </a>{' '}
                            </span>
                            <p>
                                {' '}
                                {lang.comments} <span>{comments}</span>{' '}
                            </p>
                        </PetList>
                    </ContentWrapp>

                    <BtnContainer3 style={{ marginTop: 'auto' }}>
                        <ContactButton to="mailto:alex@gmail.com">
                            {' '}
                            {lang.contact}{' '}
                        </ContactButton>
                        <AddFavButton
                            className="addFav"
                            isLike={isLike}
                            currentDiv={currentDiv}
                            onClick={checkRoute}
                        >
                            {isLike === currentDiv
                                ? `${lang.remove}`
                                : `${lang.addto}`}{' '}
                            <FaRegHeart />{' '}
                        </AddFavButton>
                    </BtnContainer3>
                    <OnCloseButton onClick={shut}>
                        <RxCross2 />
                    </OnCloseButton>
                </ModalContainer3>
            </ModalOverlay>,
            modalRoot
        );
    }
    if (type === 4) {
        return createPortal(
            <ModalOverlay
                className={`modal ${isOpen ? 'active' : 'modal-backdrop'}`}
            >
                <ModalContainer {...props}>
                    <ModalTitle>{lang.congrats}</ModalTitle>
                    <ModalText>{lang.registrationsuccess}</ModalText>
                    <BtnContainer {...props}>
                        <StyledLink
                            to="/profile"
                            exact="true"
                            onClick={shutRegSuccess}
                        >
                            {lang.gotoprofile} {iconPawprint}
                        </StyledLink>
                        {btn2}
                    </BtnContainer>
                    <OnCloseButton onClick={shutRegSuccess}>
                        <RxCross2 />
                    </OnCloseButton>
                </ModalContainer>
            </ModalOverlay>,
            modalRoot
        );
    }
    if (type === 5) {
        return createPortal(
            <ModalOverlay
                className={`modal ${
                    isOpen
                        ? ['active', 'modal-backdrop'].join(' ')
                        : 'modal-backdrop'
                }`}
            >
                <ModalContainer {...props}>
                    <ModalTitle> {lang.alreadyleaving} </ModalTitle>
                    <BtnContainer {...props}>
                        <ButtonTransparent onClick={shut}>
                            {lang.cancel}{' '}
                        </ButtonTransparent>
                        <OutButton to="/" exact="true" onClick={exit}>
                            {' '}
                            {lang.yes} <MdOutlineLogout />{' '}
                        </OutButton>
                    </BtnContainer>
                    <OnCloseButton onClick={shut}>
                        <RxCross2 />
                    </OnCloseButton>
                </ModalContainer>
            </ModalOverlay>,
            modalRoot
        );
    }
};

