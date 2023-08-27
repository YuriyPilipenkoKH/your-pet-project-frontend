import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLogout} from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BtnContainer,  BtnContainer3,  ContentWrapp,  ModalCategory,  ModalContainer, ModalContainer3, ModalImage, ModalOverlay, ModalText, ModalTitle, ModalTitle3, OnCloseButton, PetList } from './ModalPopup.styled';
import { AddFavButton, Button, ButtonTransparent, ContactButton, OutButton } from '../Button/Button';
import noticesOperations from '../../redux/notices/notices-operations'
import { setModalClose, setModalOpen } from 'redux/modal/modalSlice';
import { useAll } from 'hooks/useAll';
import { toggleSell } from 'redux/sort/sortSlice';
import { authOperations } from "redux/auth";


const modalRoot = document.querySelector('#modal-root');


export const ModalPopup = ({ type, delid, isOpen, checkRoute, widthm, heightm, widthd, heightd,  title, text, image, btnsizem, btnsized,  btn1, btn2 , onClose , cardtitle, petAvatarURL, category, location, name, birthday, sex, animal, comments, isLike, currentDiv} ) => {

const props = {
  type, widthm, heightm, widthd, heightd,  title, text, image, btnsizem, btnsized, delid
}
console.log('props', props)

const { modalIsOpen} = useAll()
const dispatch = useDispatch()

useEffect(() => {

  if (isOpen) {
    dispatch(setModalOpen())
  }
  if (!isOpen) {
    dispatch(setModalClose())
  }
  console.log('isOpen,', isOpen)
  console.log('modalIsOpen', modalIsOpen)
}, [dispatch,isOpen])




  useEffect(() => {
    const handleBackdropClick = (e) => {

      if (e.target.classList.contains("modal-backdrop")) {
    
         dispatch(setModalClose())
         onClose()
                
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        dispatch(setModalClose())
        onClose()
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
    dispatch(setModalClose())
    onClose()
  }

  const removeCard = () => {
    dispatch(noticesOperations.fetchDeleteNotice(delid))
    dispatch(setModalClose())
    onClose()

  }

  const exit = () => {
     dispatch(toggleSell())
     dispatch(setModalClose())
     dispatch(authOperations.logOut())
    onClose()
  }



if (type === 1  || type === 4  ){
  return  createPortal(
    <ModalOverlay className='modal-backdrop'>
      <ModalContainer 
      {...props}
      >
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{text}</ModalText>
        <BtnContainer {...props}>
          {btn1}
          {btn2}
        </BtnContainer >
        <OnCloseButton onClick={shut}  ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}
if ( type === 2  ){
  return  createPortal(
    <ModalOverlay className='modal-backdrop'>
      <ModalContainer 
      {...props}
      >
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{`Are you sure you want to delete  ${cardtitle} ? You can’t undo this action.`}</ModalText>
        
        <BtnContainer {...props}>
          <ButtonTransparent onClick={shut}>Cacel</ButtonTransparent>
          <Button onClick={removeCard}>Yes <RiDeleteBin6Line/> </Button>,
        </BtnContainer >
        <OnCloseButton onClick={shut} ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}
if (type === 3){
  return  createPortal(
    <ModalOverlay className='modal-backdrop'>
      <ModalContainer3  >
        {image && <ModalImage src={petAvatarURL} alt="Modal Image" />}
        <ModalCategory > {category} </ModalCategory>

        <ContentWrapp>
          <ModalTitle3 >{title}</ModalTitle3>
          <PetList>
            <p>Name:</p> <span>{name} </span> 
            <p>Birthday:</p> {birthday}
            <p>Type:</p>  <span>{animal}</span>
            <p>Place:</p> <span>  {location} </span>
            <p>The sex:</p>  {sex}
            <p className='userContact'>Email:</p> <span> <a href='mailto:alex@gmail.com'> {'alex@gmail.com'}</a> </span> 
            <p className='userContact'>Phone:</p> <span> <a href='tel:+380971234567'>{'+380971234567'}</a> </span> 
            <p >Comments:<span>{comments}</span> </p>
          </PetList>
        </ContentWrapp>

        <BtnContainer3 style={{marginTop: 'auto'}}>
        <ContactButton to="mailto:alex@gmail.com" >Contact</ContactButton>
          <AddFavButton  
          isLike={isLike}
          currentDiv={currentDiv}
          onClick ={checkRoute}>{isLike === currentDiv ? 'Remove' :'Add to'} <FaRegHeart/> </AddFavButton>
        </BtnContainer3>
        <OnCloseButton onClick={shut} ><RxCross2/></OnCloseButton>
      </ModalContainer3>
    </ModalOverlay>,
      modalRoot
  );
}
if (type === 5 ){
  return  createPortal(
    <ModalOverlay className='modal-backdrop'>
      <ModalContainer 
      {...props}
      >
        <ModalTitle>{title}</ModalTitle>
        <BtnContainer {...props}>
           <ButtonTransparent onClick={shut}>Cacel</ButtonTransparent>
           <OutButton  to="/" exact="true" onClick={exit}>  Yes <MdOutlineLogout/> </OutButton>
        </BtnContainer >
        <OnCloseButton onClick={shut} ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}

  };
  
  // ModalPopup.propTypes = {
  //   // width: PropTypes.string.isRequired,
  //   // height: PropTypes.string.isRequired,
  //   // title: PropTypes.string.isRequired,
  //   // text: PropTypes.string.isRequired,
  //   // image: PropTypes.string,

  //   onClose: PropTypes.func,
  // };
  
