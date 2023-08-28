import {
    AuthBtnWrap,
    AuthNavWrap,
    LangBtn,
    LayoutWrap,
    SharedLayoutWrap,
    ThemeBtn,
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
import { DotLoader } from 'react-spinners';
import { toggleLang } from 'redux/lang/langSlice';
import { toggleTheme } from 'redux/theme/themeSlice';
import { useDispatch} from 'react-redux';
import { useAll } from 'hooks/useAll';
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { langEN, langUA } from 'utils/languages';


export const SharedLayout = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 768;
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();
    const {theme, language} = useAll()
  

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
                    <AuthBtnWrap >
                        <LangBtn
                         onClick={() => dispatch(toggleLang())}
                         type="button">
                         {language === 'english' ?  'EN' :  'UA'}
                         </LangBtn>
                         <ThemeBtn
                         onClick={() => dispatch(toggleTheme())}
                         type="button"
                         >
                           {theme === 'light'
                           ? <MdOutlineLightMode size={25}/>
                           : <MdOutlineNightlight size={25}/>
                           }
                        </ThemeBtn>
                    </AuthBtnWrap>
                </LayoutWrap>
        
            <Suspense
                fallback={
                    <DotLoader
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: '999',
                        }}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={70}
                    />
                }
            >
                <Outlet />
            </Suspense>
        </SharedLayoutWrap>
    );
};
