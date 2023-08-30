import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    place-items: center;
    /* grid-gap: 25px; */
    background-color: var(--background-color);
    margin: 0 auto;
    width: 100%;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 320px) {
        width: 320px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
