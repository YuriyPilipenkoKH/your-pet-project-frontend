import {  useEffect, useState } from 'react';
import { TitleNotfound, Wrapper } from './NotfoundCont.styled';
import { iconPawprint } from '../../images/icons';
import { StyledLink } from '../Button/Button.styled';
import { langEN, langUA } from 'utils/languages';
import { useAll } from 'hooks/useAll';

export const NotfoundContent = () => {
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
    return (
        <Wrapper className="wrap">
                <TitleNotfound className="notfound">{lang.oops}:( </TitleNotfound>
            <StyledLink to="/">To main page {iconPawprint}</StyledLink>
        </Wrapper>
    );
};
