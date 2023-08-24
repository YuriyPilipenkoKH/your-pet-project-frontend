import {useState} from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { iconFilter } from '../../images/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { FilterWrapper } from './NoticesFilters.styled';
import { modal1 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';

export default function NoticesFilters({ state }) {
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1)
    const {isLoggedIn} = useAuth()
    const navigate = useNavigate()

  
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
            navigate('/add-pet', { state: state })
         }   
    }

    return (
        <FilterWrapper className="NoticesFilters" >
            <ButtonTransparent className= "FilterBtn" >
                Filter {iconFilter}
            </ButtonTransparent>
           <FavButton  className='filround'> {iconFilter}</FavButton>

            <AddToButton onClick = {checkRoute}  >

                Add Pet <AiOutlinePlus />
            </AddToButton>
            {showModal && (
              <ModalPopup {...modals} onClose ={onModalClose}  /> //  onClose ={onModalClose}   {...modal1} 
          )}
        </FilterWrapper>
    )}
