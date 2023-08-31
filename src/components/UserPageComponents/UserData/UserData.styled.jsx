import { Form } from 'formik';
import { ReactComponent as CheckIcon } from '../../../images/userPageIcons/check.svg';
import { ReactComponent as CrossIcon } from '../../../images/userPageIcons/cross-small.svg';
import styled from 'styled-components';

export const UserInfo = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        @media screen and (min-width: 1280px) {
            display: block;
        }
    }
`;

export const StylizedForm = styled(Form)`
    @media screen and (min-width: 768px) and (max-width: 1280px) {
        width: 182px;
    }
`;

export const Avatar = styled.img`
    width: 182px;
    height: 182px;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 40px;
`;

export const ImageControls = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
        margin-bottom: 24px;
    }
`;

export const ConfirmButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    /* margin-top: 14px; */
    border: none;
    padding-top: 0;
    padding-right: 5px;
    padding-bottom: 0;
    padding-right: 5px;
    border-radius: 20px;
    background: transparent;

    font-weight: 400;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    box-shadow: none;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--text-color);
    transition: all 1s ease-in-out;
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    }
`;

export const Cross = styled(CrossIcon)`
    stroke: #F43F5E;
    margin-right: 8px;
`;

export const Check = styled(CheckIcon)`
    color: #00c3ad;
    margin-right: 8px;
`;
