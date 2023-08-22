import styled from 'styled-components';

export const NotfoundWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    align-items: center;
    justify-content: flex-start;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;

  &>button {
    margin: 0 auto;
    margin-top: 280px;
    background-color: var(--blue);
    color: var(--white);
    width: 248px;

    @media screen and (min-width: 768px) {
        margin-top: 500px;
    }
    @media screen and (min-width: 1280px) {
        margin-top: 550px;
    }


}
    
`;

export const TitleNotfound = styled.p`
font-size: 24px;
    font-weight: 700;
    width: 280px;
    text-align: center;
`;


