import styled from 'styled-components';


export const MainContainer = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 25px;
    background-color: var(--white-bg);
    margin: 0 auto;
    width: 320px;

      @media screen and (min-width: 768px) {
    
      width: 768px;
    }

      @media screen and (min-width: 1280px) {
        
        width: 1280px;
    }
`