import styled from 'styled-components';

export const Btn = styled.button`
    position: absolute;
    padding: 0;
    right: 0;
    translate: -20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        &>svg{
            stroke: var(--yellow);
        }
    }
    @media screen and (min-width: 768px) {
        translate: -24px 0;
    }
`;
