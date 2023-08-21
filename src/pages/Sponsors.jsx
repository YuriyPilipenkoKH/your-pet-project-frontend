import React from 'react';
import sponsors from '../components/json/sponsors.json';

import { SponsorWrap, Title, Wrapper } from './pages.styled/Pages.styled';
import { SponsorCard } from '../components/Sponsors/SponsorsCard';

export const SponsorsPage = () => {
    return (
        <Wrapper>
            <Title>Our friends</Title>

            <SponsorWrap className="sponsor-page">
                {sponsors.map((item, index) => (
                    <SponsorCard key={index} item={item} />
                ))}
            </SponsorWrap>
        </Wrapper>
    );
};
