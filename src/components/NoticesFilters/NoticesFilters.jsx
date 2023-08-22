import React from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { iconFilter, iconHeart } from '../../images/icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { FilterWrapper } from './NoticesFilters.styled';

export default function NoticesFilters() {
    const styles = {
        button: {
          display: 'none',
        },
        buttonLarge: {
            display: 'flex',
        },
    };

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
