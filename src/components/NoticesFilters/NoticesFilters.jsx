import React from 'react';
import { AddToButton, ButtonTransparent } from '../Button/Button';
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
            
            <AddToButton>
                Add Pet <AiOutlinePlus />
            </AddToButton>
        </FilterWrapper>
    );
}
