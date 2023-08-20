import { Button, ButtonTransparent, ContactButton, LogButton, OutButton } from "../components/Button/Button";
import { ModalPopup } from "../components/ModalPopup/ModalPopup";
import {  iconPawprint } from "../images/icons";
import { modal1, modal2, modal3, modal4, modal5 } from "../modals/modals";
import { HomeTitle, HomeWrapper } from "./pages.styled/Pages.styled";
// import image from '../images/home_m.png';
import { MdOutlineLogout} from "react-icons/md";
import { useState } from "react";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [modals, setModals] = useState(modal1)

  const onModalOpen = () => {
    setShowModal(true);
 
  };

  const onModalClose = () => {
      setShowModal(false);
    
  };
  

  return (
    <HomeWrapper>
      <HomeTitle> Take good care of your small pets</HomeTitle>

   
    
 
    <Button onClick={() => {
  setModals(modal1);
  onModalOpen(); 
  }}>   
  Learn more </Button>

    <ButtonTransparent onClick={() => {
  setModals(modal2);
  onModalOpen(); 
  }}>Learn more </ButtonTransparent>

    <LogButton onClick={() => {
  setModals(modal3);
  onModalOpen(); 
  }}>Log IN {iconPawprint}</LogButton>

<OutButton onClick={() => {
  setModals(modal4);
  onModalOpen(); 
  }}>  Logout<MdOutlineLogout/></OutButton>

<ContactButton onClick={() => {
  setModals(modal5);
  onModalOpen(); 
  }}>Contact</ContactButton>

{showModal && (
        <ModalPopup {...modals} onClose ={onModalClose}  /> //  onClose ={onModalClose}   {...modal1} 
    )}
      
    </HomeWrapper>
  );
}
