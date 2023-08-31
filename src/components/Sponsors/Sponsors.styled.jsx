import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

export const SponsorCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    gap: 8px;
    width: 280px;
    height: 239px;

    border-radius: 20px;
    background-color: var(--card-color);
    box-shadow: var(--shadow-default);
    transition: all 0.4s ease-in;
    &:hover {
        box-shadow: var(--shadow-hover);
    }
`;

export const SponsorCardTitle = styled.a`
    text-align: center;
    font-weight: 700;
    text-align: center;
    color: var(--text-color);
    height: 40px;
`;

export const WrapContent = styled.div`
    display: flex;
    gap: 10px;
`;

export const ImgWrap = styled.div`
    display: flex;
`;

export const SponsorImage = styled.img`
    width: 100px;
    height: 68px;
`;

export const SponsorContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const TextWrap = styled.div`
    width: 125px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
   
`;
export const Span = styled.span.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'showWorkHours' 
    })`
    font-size: 12px;
    color: var(--text-color);
    cursor: pointer;
    color: ${({ showWorkHours  }) => showWorkHours === true && 'var(--blue)'};
`;

export const SponsorText = styled.p.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'showWorkHours' 
       })`
    font-size: 12px;
    color: var(--text-color);
    cursor: pointer;
    color: ${({ showWorkHours }) => showWorkHours === true && 'var(--blue)'};
`;

export const Date = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--white);
`;

export const WrapperOclock = styled.div`
    display: flex;
    gap: 12px;

 `;

export const Calendar = styled.div`
    position: absolute;
    top: 35px;
    width: 120px;

    background-color: var(--background-color-form);
    border-radius: 8px;
    border: 1px solid var(--blue);
    padding: 12px 7px;
    transition: all 1s ease-in-out;
    z-index: 2;
    
`;

export const TextOclock = styled.span`
    color: var(--text-color);
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    font-style: normal;
    transition: all 1s ease-in-out;
    &:first-child {
        width: 12px;
    }
`;
