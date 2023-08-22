import styled from 'styled-components';

export const StyledTab = styled.div`
    width: 80px;
    height: 28px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    background-color: var(--light-blue);
    border-radius: 14px;
    overflow: auto;

    color: #111;
    font-size: 10px;
    font-weight: 600;

    &>svg{
        fill: var(--blue);
    }

`

export const CategoryWrapp = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 16px 16px 0;
    height: 32px;
    padding: 10px 17px;
    background-color: var(--light-blue);
    font-size: 12px;
    font-weight: 600;
`