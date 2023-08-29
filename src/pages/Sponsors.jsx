import React from 'react';
import {  useEffect, useState } from 'react';
import { SponsorWrap, TitleSponsor, Wrapper, } from './pages.styled/Pages.styled';
import { SponsorCard } from '../components/Sponsors/SponsorsCard';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useDispatch, useSelector } from 'react-redux';
import sponsorsOperation from '../redux/sponsors/sponsorsOperations'
import { getSponsorsList } from 'redux/sponsors/sponsorsSelectors';

export const SponsorsPage = () => {
    const dispatch = useDispatch();
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)
    const sponsors = useSelector(getSponsorsList);

    useEffect(() => {
        dispatch(sponsorsOperation.fetchSponsors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
