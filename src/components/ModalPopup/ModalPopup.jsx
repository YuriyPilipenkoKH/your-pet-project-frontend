import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLogout} from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BtnContainer,  BtnContainer3,  ContentWrapp,  ModalCategory,  ModalContainer, ModalContainer3, ModalImage, ModalOverlay, ModalText, ModalTitle, ModalTitle3, OnCloseButton, PetList } from './ModalPopup.styled';
import { Button, ButtonTransparent, OutButton } from '../Button/Button';

const modalRoot = document.querySelector('#modal-root');


export const ModalPopup = ({ type, checkRoute, widthm, heightm, widthd, heightd,  title, text, image, btnsizem, btnsized,  btn1, btn2 , onClose } ) => {

const props = {
  type, widthm, heightm, widthd, heightd,  title, text, image, btnsizem, btnsized
}

  useEffect(() => {
    const handleBackdropClick = (e) => {

      if (e.target.classList.contains("modal-backdrop")) {
       return onClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
       return onClose();
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
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
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
        <ModalText>{text}</ModalText>
        <BtnContainer {...props}>
          <ButtonTransparent onClick={onClose}>Cacel</ButtonTransparent>
          <Button onClick={onClose}>Yes <RiDeleteBin6Line/> </Button>,
        </BtnContainer >
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}
if (type === 3){
  return  createPortal(
    <ModalOverlay className='modal-backdrop'>
      <ModalContainer3  >
        {image && <ModalImage src={image.doggy} alt="Modal Image" />}
        <ModalCategory > {'in good hands'} </ModalCategory>

        <ContentWrapp>
          <ModalTitle3 >{title}</ModalTitle3>
          <PetList>
            <p>Name:</p> {'Rich'}
            <p>Birthday:</p> {'21.09.2020'}
            <p>Type:</p>  {'Pomeranian'}
            <p>Place:</p>  {'Lviv'}
            <p>The sex:</p>  {'male'}
            <p className='userContact'>Email:</p> <span>{'user@mail.com'}</span> 
            <p className='userContact'>Phone:</p> <span>{'+380971234567'}</span> 
            <p >Comments:<span>{' Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! '}</span> </p>
          </PetList>
        </ContentWrapp>

        <BtnContainer3 style={{marginTop: 'auto'}}>
          {btn1}
          <Button  onClick ={checkRoute}>Add to <FaRegHeart/> </Button>
        </BtnContainer3>
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
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
           <ButtonTransparent onClick={onClose}>Cacel</ButtonTransparent>
           <OutButton  to="/" exact="true" onClick={onClose}>  Yes <MdOutlineLogout/> </OutButton>
        </BtnContainer >
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
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
  
