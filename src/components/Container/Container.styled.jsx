import styled from 'styled-components';

export const MainContainer = styled.div`
    outline: 1p solid red;
    display: grid;
    place-items: center;
    grid-gap: 25px;
    background-color: var(--white-bg);
    margin: 0 auto;
    width: 100%;
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
