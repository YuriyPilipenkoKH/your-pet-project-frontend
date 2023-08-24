import React, { useState } from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { iconFilter } from '../../images/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { FilterWrapper } from './NoticesFilters.styled';
import { useAuth } from 'hooks/useAuth';
import { modal1 } from '../../modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useNavigate } from 'react-router-dom';


export default function NoticesFilters() {
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);
    const navigate = useNavigate()

    const onModalOpen = () => {
        setShowModal(true);
    };

    const onModalClose = () => {
        setShowModal(false);
    };

    const { isLoggedIn } = useAuth();
    const checkLogin = () => {
if(!isLoggedIn){
    setModals(modal1);
    onModalOpen();
} else {
    navigate("/add-pet");
   

}

        
    }

    return (
        <FilterWrapper className="NoticesFilters">
            <ButtonTransparent className="FilterBtn">
                Filter {iconFilter}
            </ButtonTransparent>

            <FavButton className="filround"> {iconFilter}</FavButton>

            <AddToButton
                onClick= {checkLogin}>
                Add Pet <AiOutlinePlus />
            </AddToButton>
            {showModal && (
        <ModalPopup {...modals} onClose ={onModalClose}  /> //  onClose ={onModalClose}   {...modal1} 
    )}
        </FilterWrapper>
    );
}

// onClick={() => {
//     setModals(modal1);
//     onModalOpen();
//     }}>
