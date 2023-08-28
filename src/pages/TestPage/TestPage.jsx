import { AddToButton, Button, ButtonTransparent, ContactButton, LogButton, OutButton, RadioButton } from "../../components/Button/Button";
import { iconFilter, iconPawprint } from "../../images/icons";
import { modal1, modal2, modal3, modal4, modal5 } from "../../modals/modals";
import { HomeTitle,  TestWrapp } from "../pages.styled/Pages.styled"
import { useState } from "react";

import { MdOutlineLogout} from "react-icons/md";
import { AiOutlinePlus} from "react-icons/ai";
import { ModalPopup } from "../../components/ModalPopup/ModalPopup";
import { setCategory } from "redux/pets/petsSlice";

import { useDispatch} from 'react-redux';



export const TestPage =()=> {

    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1)
    const dispatch = useDispatch();


    const onModalOpen = () => {
      setShowModal(true);
   
    };
  
    const onModalClose = () => {
        setShowModal(false);
      
    };


    

    return(
        <TestWrapp >
        {/* <LangBtn  
        onClick={() => dispatch(toggleLang())}
        type="button">
        {lang === 'eng' ?  'EN' :  'UA'}
        </LangBtn>

        <ThemeBtn 
        onClick={() => dispatch(toggleTheme())}
        type="button"
      
        >
          {theme === 'light'
          ? <MdOutlineLightMode size={30}/>
          : <MdOutlineNightlight size={30}/>
          }
        </ThemeBtn> */}

            <HomeTitle> Test Page</HomeTitle>

            <Button onClick={() => {
  setModals(modal1);
  onModalOpen(); 
  }}>   
  Learn more </Button>

    <ButtonTransparent onClick={() => {
  setModals(modal2);
  onModalOpen(); 
  }}>Learn more {iconFilter} </ButtonTransparent>

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


  <AddToButton onClick ={()=>  console.log('click')} >Add Pet <AiOutlinePlus/></AddToButton>



  <RadioButton>your pet</RadioButton>
  <RadioButton>sell</RadioButton>
  <RadioButton>lost/found</RadioButton>
  <RadioButton>in good hands</RadioButton>

  {showModal && (
        <ModalPopup {...modals} onClose ={onModalClose} isOpen={showModal}/> //  onClose ={onModalClose}   {...modal1} 
    )}
      
            
        </TestWrapp>
    )
}