import { Button, ButtonTransparent, LogButton } from "../components/Button/Button";
import { ModalPopup } from "../components/ModalPopup/ModalPopup";
import { iconFilter, iconMenuHamburger, iconPawprint } from "../images/icons";
import { modal1, modal2, modal3 } from "../modals/modals";
import { HomeTitle, HomeWrapper } from "./pages.styled/Pages.styled";
// import image from '../images/home_m.png';
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
  Learn more {iconMenuHamburger}</Button>

    <ButtonTransparent onClick={() => {
  setModals(modal2);
  onModalOpen(); 
  }}>Learn more {iconFilter}</ButtonTransparent>

    <LogButton onClick={() => {
  setModals(modal3);
  onModalOpen(); 
  }}>Log IN {iconPawprint}</LogButton>

{showModal && (
        <ModalPopup {...modals} onClose ={onModalClose}  /> //  onClose ={onModalClose}   {...modal1} 
    )}
      
    </HomeWrapper>
  );
}
