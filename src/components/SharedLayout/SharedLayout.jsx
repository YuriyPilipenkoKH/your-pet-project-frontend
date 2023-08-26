import {
    AuthNavWrap,
    LayoutWrap,
    SharedLayoutWrap,
} from './SharedLayout.styled';

import { iconLogo, iconLogoBig } from '../../images/icons';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import { ButtonBurger } from '../Nav/Nav.styled';
import { Nav } from '../Nav/Nav';
import { RxHamburgerMenu } from 'react-icons/rx';
import { StyledLogo } from '../Button/Button.styled';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useAuth } from 'hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';

export const SharedLayout = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 768;
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SharedLayoutWrap className="sharedLayout">
                <LayoutWrap className="layoutWrap">
                    <StyledLogo to="/">
                        {isMobile ? iconLogo : iconLogoBig}
                    </StyledLogo>
                    <Nav />
                    <AuthNavWrap className="AuthNavWrap">
                        {isLoggedIn ? <UserNav /> : <AuthNav />}

                        <ButtonBurger onClick={toggleMenu}>
                            <RxHamburgerMenu />
                        </ButtonBurger>
                    </AuthNavWrap>
                    <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
                </LayoutWrap>
            </SharedLayoutWrap>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};
