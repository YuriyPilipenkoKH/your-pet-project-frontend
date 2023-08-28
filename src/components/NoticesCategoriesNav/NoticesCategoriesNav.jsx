import {  useEffect, useState } from 'react';

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
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export default function NoticesCategoriesNav({
    handleChangeCurrentActive,
    currentActive,
}) {

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
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
                        {lang.sell}
                    </RadioButton>
                    <RadioButton
                        onClick={() => dispatch(toggleLostFound())}
                        className={currentIndex === 1 ? 'active' : ''}
                    >
                        {lang.lost}
                    </RadioButton>
                    <RadioButton
                        onClick={() => dispatch(toggleInGoodHands())}
                        className={currentIndex === 2 ? 'active' : ''}
                    >
                        {lang.hands}
                    </RadioButton>

                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => dispatch(toggleFavoriteAds())}
                            className={currentIndex === 3 ? 'active' : ''}
                        >
                            {lang.favadds}
                        </RadioButton>
                    )}
                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => dispatch(toggleMyAds())}
                            className={currentIndex === 4 ? 'active' : ''}
                        >
                           {lang.myadds}
                        </RadioButton>
                    )}
                </BtnWrap>
            </NavWrapper>
        </>
    );
}
