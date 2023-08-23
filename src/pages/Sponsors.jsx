import React from 'react';
import sponsors from '../utils/json/sponsors.json';

import { SponsorWrap, TitleSponsor, Wrapper, } from './pages.styled/Pages.styled';
import { SponsorCard } from '../components/Sponsors/SponsorsCard';

export const SponsorsPage = () => {
    return (
        <Wrapper>
            <TitleSponsor>Our friends</TitleSponsor>

            <SponsorWrap className="sponsor-page">
                {sponsors.map((item, index) => (
                    <SponsorCard key={index} item={item} />
                ))}
            </SponsorWrap>
        </Wrapper>
    );
};
