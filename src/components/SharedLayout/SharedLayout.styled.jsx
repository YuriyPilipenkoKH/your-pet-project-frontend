import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const SharedLayoutWrap = styled.div`
    width: 100%;
`;

export const LogoLink = styled(NavLink)`
    width: 116px;
    @media screen and (min-width: 768px) {
        width: 162px;
    }
`;

export const LayoutWrap = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const AuthNavWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
