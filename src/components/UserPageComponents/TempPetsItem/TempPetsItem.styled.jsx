

import styled from 'styled-components';

export const TempCard = styled.div`
padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    padding-left: 20px;
    width: 280px;
    height: 450px;
    margin-bottom: 50px;

    background: var(--background-color-form);
    transition: all 1s ease-in-out;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        padding: 20px;
        width: 703px;
        height: 180px;
    }
    @media screen and (min-width: 1280px) {
        display: flex;
        gap: 20px;
        padding: 20px;
        width: 821px;
    }

    &>h2{
         transition: all 1s ease-in-out;
        text-align: center;
        color: var(--text-color);

         @media screen and (min-width: 768px) {
            text-align: start;
            width: 400px;
         }
    }

   `