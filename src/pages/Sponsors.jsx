import React from 'react';
import sponsors from '../components/json/news.json';
import { SponsorCard } from '../components/Sponsors/SponsorsCard';
import { Tytle, Wrapper } from './pages.styled/Pages.styled';

export const SponsorsPage = () => {
    
    return (
        <Wrapper>
            <Tytle>Our friends</Tytle>

            <SponsorsPage className="sponsor-page">
                {sponsors.map((item, index) => (
                    <SponsorCard
                        key={index}
                        addressUrl={item.addressUrl}
                        img={item.imgUrl}
                        title={item.title}
                        address={item.address}
                        workDays={item.workDays}
                        url={item.url}
                        phone={item.phone}
                        email={item.email}
                    />
                ))}
            </SponsorsPage>
        </Wrapper>
    );
};
