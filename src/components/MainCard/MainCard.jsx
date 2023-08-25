import {useState} from 'react';
import { iconClock, iconFem, iconHeart, iconMale, iconMan, iconMap, iconTrash } from "../../images/icons";
import { ButtonTransparent, FavButton } from "../Button/Button"
import { Tab } from "../Tab/Tab"
import { CardTitle, CardWrapper, ImgWrapper } from "./MainCard.styled"
import { CategoryWrapp } from "../Tab/Tab.styled";
import { modal1, modal3 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';



export const MainCard = ({title, photo, sex, place, name, category, birthday} ) => {

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
function calculateAge(birthday) {
  const birthDate = new Date(birthday); // Parse birthday string into Date object
  const currentDate = new Date(); // Current date

  // Calculate age in years
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust age if birth date hasn't occurred yet this year
  if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
  ) {
      age--;
  }

  // Format the age string based on the calculated age
  if (!age) {
      return `1 month`;
  } 
  else if(age < 1) {
    return `0 years`;
  }
  else if(age === 1) {
    return `1 year`;
  }
  else {
      return `${age} years`;
  }}

return(
    <CardWrapper>
      <ImgWrapper  photo ={photo}>
        <CategoryWrapp className='category'> {category} </CategoryWrapp>
        <FavButton className='fav' onClick = {checkRoute}> {iconHeart}</FavButton>
        {isLoggedIn && <FavButton className='del'> {iconTrash}</FavButton>}

        <Tab className="tab1" text= {place || 'Somewhere'} icon = {iconMap}  ></Tab>
        <Tab className='tab2' text= {calculateAge(birthday) || '0 years'} icon = {iconClock}  ></Tab>
        <Tab className='tab3' text= {sex} icon = {sex === 'male' ? iconMan :  iconFem}  ></Tab>
    

      </ImgWrapper>

      <CardTitle>  {title} </CardTitle>
      <ButtonTransparent  onClick={onLearnMore} >Learn more</ButtonTransparent>
      {showModal && (
       <ModalPopup {...modals} onClose ={onModalClose} checkRoute ={checkRoute}  /> //  onClose ={onModalClose}   {...modal1} 
   )}
    </CardWrapper>
)
}