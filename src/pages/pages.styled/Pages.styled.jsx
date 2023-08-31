import styled from 'styled-components';

import bgImgD from '../../images/home-bg-d.png';
import bgImgM from '../../images/home-bg-m.png';
import bgImgT from '../../images/home-bg-t.png';

import FormBgImgD from '../../images/form-bg-d.png';
import FormBgImgM from '../../images/form-bg-m.png';
import FormBgImgT from '../../images/form-bg-t.png';

import bgImgNotfoundM from '../../images/notfound-bg-m.png';
import bgImgNotfoundM2 from '../../images/notfound-bg-m@2x.png';
import bgImgNotfoundD from '../../images/notfound-bg-d.png';
import bgImgNotfoundD2 from '../../images/notfound-bg-d@2x.png';
import bgImgNotfoundT from '../../images/notfound-bg-t.png';
import bgImgNotfoundT2 from '../../images/notfound-bg-t@2x.png';
import isPropValid from '@emotion/is-prop-valid';

// Home
export const HomeWrapper = styled.div`
    width: 100%;
    height: 600px;
    background-image: url('${bgImgM}');
    padding: 40px 20px 0 20px;

    @media screen and (min-width: 768px) {
        padding: 80px 20px 0 20px;
        height: 1024px;
        background-image: url('${bgImgT}');
    }

    @media screen and (min-width: 1280px) {
        padding: 0px 20px 0 20px;
        display: flex;
        align-items: center;
        justify-content: start;
        height: 768px;
        background-image: url('${bgImgD}');
    }
`;

export const HomeWrapperTwo = styled.div`
    width: 100%;
    overflow-x: hidden;
    height: 600px;
    background-image: url('${FormBgImgM}');
    padding: 0px 20px 0 20px;

    @media screen and (min-width: 768px) {
        padding: 40px 20px 0 20px;
        height: 800px;
        background-image: url('${FormBgImgT}');
    }

    @media screen and (min-width: 1280px) {
        padding: 20px 20px 0 20px;
        display: flex;
        align-items: center;
        justify-content: start;
        height: 768px;
        background-image: url('${FormBgImgD}');
    }
`;
// Home title
export const HomeTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: var(--text-color);
    transition: all 1s ease-in-out;

    @media screen and (min-width: 768px) {
        width: 588px;
        font-size: 68px;
    }
    @media screen and (min-width: 1280px) {
        width: 500px;
        font-size: 68px;
        font-weight: 800;
    }
`;
// Nwes
export const NewsWrapper = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 44px;
    padding-bottom: 40px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    gap: 24px;
    @media screen and (min-width: 768px) {
        padding-top: 60px;
        gap: 40px;
    }
`;

export const TytleNwes = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 32.78px;
    text-align: center;
    color: var(--text-color);
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 65.57px;
    }
`;

export const NewsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
`;

export const SearchForm = styled.form`
    position: relative;

    & > button {
        padding: 8px;
        background-color: transparent;
        position: absolute;
        top: 2px;
        right: 10px;

        & > span > svg {
            scale: 1.5;
        }
    }
`;
export const SearchIcon = styled.span`
    fill: var(--blue);
`;

export const SearchInput = styled.input`
  width: 280px;
  height: 44px;
  font-size: 16px;
  padding: 0 30px;
  border: 1px solid var(--blue);
  border-radius:50px;
  color: var(--grey);

    &::placeholder {
        font-size: 14px;
        line-height: 16.94px;
    }

    &::placeholder {
        font-size: 14px;
        line-height: 16.94px;
    }

    &:focus {
        outline: 1px solid var(--blue);
    }

    @media screen and (min-width: 768px) {
        width: 608px;
        font-size: 18px;
        &::placeholder {
            font-size: 20px;
            line-height: 24.2px;
        }
    }
`;

export const TestWrapp = styled.div`
    display: flex;
    flex-direction: column;

    gap: 19px;

    & > button {
        max-width: 160px;
    }
`;
//SponsorWrap
export const SponsorWrap = styled.div`
    /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap; */
    display: grid;
    gap: 32px;
    place-items: center;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
export const TitleSponsor = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 32.78px;
    text-align: center;
    color: var(--text-color);
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 65.57px;
    }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
    gap: 24px;
    @media screen and (min-width: 768px) {
        padding-top: 60px;
        gap: 40px;
    }
    @media screen and (min-width: 1280px) {
        padding-top: 60px;
        gap: 60px;
    }
`;
//Notfound
export const Notfound = styled.div`
    padding-top: 30px;
    height: 600px;
    width: 320px;
    background-image: url('${bgImgNotfoundM}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url('${bgImgNotfoundM2}');
    }

    @media screen and (min-width: 768px) {
        width: 768px;
        height: 1024px;
        background-image: url('${bgImgNotfoundT}');

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${bgImgNotfoundT2}');
        }
    }

    @media screen and (min-width: 1280px) {
        width: 1280px;
        height: 768px;
        background-image: url('${bgImgNotfoundD}');

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url('${bgImgNotfoundD2}');
        }
    }
`;

export const CommonWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 24px;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    padding-bottom: 40px;
    @media screen and (min-width: 768px) {
        gap: 40px;
        padding-bottom: 40px;
    }
`;
export const PaginationButton = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'active' &&
        prop !== 'currentButton' &&
        prop !== 'theme',
})`
    color: ${({ active, currentButton }) =>
        active === currentButton ? 'var(--white)' : 'var(--black)'};
    color: ${({ theme }) => theme === 'dark' && 'var(--white)'};
    background-color: transparent;
    background-color: ${({ active, currentButton }) =>
        active === currentButton ? 'var(--blue)' : 'transparent'};
    border: 1px solid #54adff;
    font-size: 14px;
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
    line-height: 15px;
    padding: 10px 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        color: var(--white);
        background-color: var(--blue);
    }

    & > svg > path {
        fill: ${({ theme }) => theme === 'dark' && 'var(--white)'};
        fill-opacity: ${({ theme }) => theme === 'dark' && '1'};
    }
`;

export const ListButtonForPagination = styled.div`
    display: flex;
    gap: 4px;
    @media screen and (min-width: 768px) {
        gap: 8px;
    }
`;
