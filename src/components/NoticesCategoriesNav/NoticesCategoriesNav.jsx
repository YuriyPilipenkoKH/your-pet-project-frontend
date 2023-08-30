import {  useEffect, useState } from 'react';
import { RadioButton } from '../Button/Button';
import { NavWrapper } from '../../pages/pages.styled/NoticesPage.styled';
import { BtnWrap } from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export default function NoticesCategoriesNav({ setActiveIndexFunction, activeIndex }) {

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
    const { isLoggedIn } = useAuth();

    return (
        <>
            <NavWrapper>
                <BtnWrap>
                    <RadioButton
                        onClick={() => setActiveIndexFunction(0)}
                        className={activeIndex === 0 ? 'active' : ''}
                    >
                        {lang.sell}
                    </RadioButton>
                    <RadioButton
                        onClick={() => setActiveIndexFunction(1)}
                        className={activeIndex === 1 ? 'active' : ''}
                    >
                        {lang.lost}
                    </RadioButton>
                    <RadioButton
                        onClick={() => setActiveIndexFunction(2)}
                        className={activeIndex === 2 ? 'active' : ''}
                    >
                        {lang.goodhands}
                    </RadioButton>

                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => setActiveIndexFunction(3)}
                            className={activeIndex === 3 ? 'active' : ''}
                        >
                            {lang.favadds}
                        </RadioButton>
                    )}
                    {isLoggedIn && (
                        <RadioButton
                            onClick={() => setActiveIndexFunction(4)}
                            className={activeIndex === 4 ? 'active' : ''}
                        >
                           {lang.myadds}
                        </RadioButton>
                    )}
                </BtnWrap>
            </NavWrapper>
        </>
    );
}
