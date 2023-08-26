import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RadioButton } from '../Button/Button';
import { NavWrapper } from '../../pages/pages.styled/NoticesPage.styled';
import { BtnWrap } from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';
import {
    toggleInGoodHands,
    toggleLostFound,
    toggleSell,
    toggleFavoriteAds,
    toggleMyAds,
} from 'redux/sort/sortSlice';
import { activeIndex } from 'redux/sort/sortSelectors';

export default function NoticesCategoriesNav({
    handleChangeCurrentActive,
    currentActive,
}) {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();
    const currentIndex = useSelector(activeIndex);

    return (
        <>
            <NavWrapper>
                <BtnWrap>
                    <RadioButton
                        onClick={() => dispatch(toggleSell())}
                        className={currentIndex === 0 ? 'active' : ''}
                    >
                        sell
                    </RadioButton>
                    <RadioButton
                        onClick={() => dispatch(toggleLostFound())}
                        className={currentIndex === 1 ? 'active' : ''}
                    >
                        lost/found
                    </RadioButton>
                    <RadioButton
                        onClick={() => dispatch(toggleInGoodHands())}
                        className={currentIndex === 2 ? 'active' : ''}
                    >
                        in good hands
                    </RadioButton>

                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => dispatch(toggleFavoriteAds())}
                            className={currentIndex === 3 ? 'active' : ''}
                        >
                            favorite ads
                        </RadioButton>
                    )}
                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => dispatch(toggleMyAds())}
                            className={currentIndex === 4 ? 'active' : ''}
                        >
                            my ads
                        </RadioButton>
                    )}
                </BtnWrap>
            </NavWrapper>
        </>
    );
}
