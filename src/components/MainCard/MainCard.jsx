import {useState} from 'react';
import { iconClock, iconFem, iconHeart, iconMap, iconTrash } from "../../images/icons";
import { ButtonTransparent, FavButton } from "../Button/Button"
import { Tab } from "../Tab/Tab"
import { CardTitle, CardWrapper, ImgWrapper } from "./MainCard.styled"
import { CategoryWrapp } from "../Tab/Tab.styled";
import { modal1, modal3 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';



export const MainCard = ( ) => {

//===========================
const [showModal, setShowModal] = useState(false);
const [modals, setModals] = useState(modal1)
const {isLoggedIn} = useAuth()

const onModalClose = () => {
    setShowModal(false);
};

const checkRoute = () => {
    if(!isLoggedIn) {
        setModals(modal1)
        setShowModal(true);
        }
     else
     {
      console.log('Add to Favorites')
        // navigate('/add-pet')
     }   
}

const onLearnMore = () => {
  setModals(modal3);
  setShowModal(true);
}
//===========================


return(
    <CardWrapper>
      <ImgWrapper>
        <CategoryWrapp className='category'> {'In good hands'} </CategoryWrapp>
        <FavButton className='fav' onClick = {checkRoute}> {iconHeart}</FavButton>
        {isLoggedIn && <FavButton className='del'> {iconTrash}</FavButton>}

        <Tab className="tab1" text= {'Ivano'} icon = {iconMap}  ></Tab>
        <Tab className='tab2' text= {'1 year'} icon = {iconClock }  ></Tab>
        <Tab className='tab3' text= {'female'} icon = {iconFem}  ></Tab>
    

      </ImgWrapper>

      <CardTitle>Сute kitty looking for a home</CardTitle>
      <ButtonTransparent  onClick={onLearnMore} >Learn more</ButtonTransparent>
      {showModal && (
       <ModalPopup {...modals} onClose ={onModalClose} checkRoute ={checkRoute}  /> //  onClose ={onModalClose}   {...modal1} 
   )}
    </CardWrapper>
)
}