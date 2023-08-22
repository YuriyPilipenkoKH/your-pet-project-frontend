import React from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { iconFilter } from '../../images/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { FilterWrapper } from './NoticesFilters.styled';

export default function NoticesFilters() {
   

    return (
        <FilterWrapper 
            className="NoticesFilters"
        >
            <ButtonTransparent
                
                className= "FilterBtn"
            >
                Filter {iconFilter}{' '}
            </ButtonTransparent>
            <FavButton className='filround'> {iconFilter}</FavButton>
            <AddToButton>
                Add Pet <AiOutlinePlus />
            </AddToButton>
        </FilterWrapper>
    );
}
