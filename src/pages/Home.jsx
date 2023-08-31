import { useEffect, useState } from 'react';

import { HomeTitle, HomeWrapper } from './pages.styled/Pages.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

const Home = () => {
    const { language } = useAll();
    const [lang, setLang] = useState(langUA);

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);
    return (
        <HomeWrapper>
            <HomeTitle> {lang.homeTitle} </HomeTitle>
           
        </HomeWrapper>
    );
};

export default Home;
