import { useState, useEffect } from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { arrowD, iconFilter } from '../../images/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import {
    DropdownMenu,
    FilterWrapper,
    FiltersBtn,
} from './NoticesFilters.styled';
import { modal1 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useAll } from 'hooks/useAll';

export default function NoticesFilters({ state }) {
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);
    const [showFilters, setShowFilters] = useState(false);
    const [big1, setBig1] = useState(false);
    const [big2, setBig2] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { modalIsOpen } = useAll();

    useEffect(() => {
        setShowFilters(false);
    }, [modalIsOpen]);

    const onModalClose = () => {
        setShowModal(false);
    };

    const checkRoute = () => {
        if (!isLoggedIn) {
            setModals(modal1);
            setShowModal(true);
        } else {
            navigate('/add-pet', { state: state });
        }
    };

    const expandFilter = () => {};
    return (
        <>
            <FilterWrapper className="NoticesFilters">
                <ButtonTransparent
                    onClick={() => setShowFilters(!showFilters)}
                    className="FilterBtn"
                >
                    Filter {iconFilter}
                </ButtonTransparent>
                <FavButton
                    onClick={() => setShowFilters(!showFilters)}
                    className="filround"
                >
                    {' '}
                    {iconFilter}
                </FavButton>

                <AddToButton onClick={checkRoute}>
                    Add Pet <AiOutlinePlus />
                </AddToButton>
                {showFilters && (
                    <DropdownMenu>
                        <h3>Filters</h3>

                        <FiltersBtn>
                            <span onClick={() => setBig1(!big1)}>
                                {' '}
                                {arrowD} By age
                            </span>
                        </FiltersBtn>
                        <div></div>
                        <FiltersBtn>
                            <span onClick={() => setBig2(!big2)}>
                                {' '}
                                {arrowD} By gender
                            </span>
                        </FiltersBtn>
                    </DropdownMenu>
                )}
            </FilterWrapper>
            {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                />
            )}
        </>
    );
}
