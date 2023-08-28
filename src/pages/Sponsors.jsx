import React from 'react';
import sponsors from '../utils/json/sponsors.json';
import {  useEffect, useState } from 'react';
import { SponsorWrap, TitleSponsor, Wrapper, } from './pages.styled/Pages.styled';
import { SponsorCard } from '../components/Sponsors/SponsorsCard';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export const SponsorsPage = () => {

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'eng' ?  langEN :  langUA);
    }, [language])

    return (
        <Wrapper>
            <TitleSponsor>{lang.frineds}</TitleSponsor>

            <SponsorWrap className="sponsor-page">
                {sponsors.map((item, index) => (
                    <SponsorCard key={index} item={item} />
                ))}
            </SponsorWrap>
        </Wrapper>
    );
};
