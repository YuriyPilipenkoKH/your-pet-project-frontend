import styled from 'styled-components';

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 12px;
    }

    @media screen and (min-width: 1280px) {
        flex-direction: row;
    }
`;

export const NavWrap = styled.div`
    /* display:none; */
    /* margin-top: 8px;
    margin-bottom: 24px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* max-width: 210px; */
    gap: 8px;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1280px) {
    }
`;

export const NoticesPageWrap = styled.div`
    padding: 0 20px;
    display: flex;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: baseline;
        padding: 0 32px;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 16px;
    }
`;

export const NoticeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    padding-bottom: 30px;
`;

export const SearchForm = styled.form`
    position: relative;

    &>button {
        padding: 8px;
        border: none;
        background-color: transparent;
        position: absolute;
        top:8px;
        right: 10px;
    }
`;
export const SearchButton = styled.button`
    position: relative;

    &>div  {
        /* position: absolute;
        top:8px;
        right: 10px; */
    }
`;