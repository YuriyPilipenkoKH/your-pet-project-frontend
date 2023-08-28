import styled from 'styled-components';
import { OutButton } from '../../Button/Button';

export const UserForm = styled.form`
    @media screen and (min-width: 768px) {
        width: 355px;
        margin: 0;
        padding: 0;
    }
`;

export const Logout = styled(OutButton)`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 21px 0 0 2px;
    padding: 0;
    stroke: #54adff;
    width: 155px ;

    font-family: Manrope;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.35;
    background: none;
    border: none;
    letter-spacing: 0.04em;
    color: #888888;
    @media screen and (min-width: 768px) {
        margin: 13px 0 0;
    }

    &:hover,
    &:focus {
        box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
        background: transparent;
        color: #888888;
        border: none;
    }
`;