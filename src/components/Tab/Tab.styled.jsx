import styled from 'styled-components';

export const StyledTab = styled.div`
    width: 80px;
    height: 28px;
    display: grid;

    grid-template-columns: 40% auto;
    align-items: center;
    background-color: var(--light-blue);
    border-radius: 14px;

    font-size: 10px;
    font-weight: 600;
    color: #111;
    
    
    &>div{
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap; 
    
    }
    &>svg{
        fill: var(--blue);
        justify-self: center;
    }

`

export const CategoryWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 16px 16px 0;
    height: 32px;
    padding: 10px 20px;
    background-color: var(--light-blue);
    font-size: 12px;
    font-weight: 600;
`