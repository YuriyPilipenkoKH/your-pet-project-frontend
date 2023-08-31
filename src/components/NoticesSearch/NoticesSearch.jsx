import { useEffect, useState } from 'react';
import {
    TytleNwes,
    SearchWrapper,
    SearchIcon,
    SearchInput,
} from './NoticesSearch.styled';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { FormButton } from 'components/Button/Button';
import noticesOperations from '../../redux/notices/notices-operations';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { SearchButton, SearchForm } from 'pages/pages.styled/NoticesPage.styled';

export default function NoticesSearch({ search, setFilterValueFunction, filterValue, activeIndex }) {
    const { language } = useAll();
    const [lang, setLang] = useState(langUA);

    const dispatch = useDispatch();

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);

    const searchByCategory = e => {
        e.preventDefault();
        if (activeIndex === 3) {
            dispatch(noticesOperations.fetchAllFavorite(search));
        } else if (activeIndex === 4) {
            dispatch(noticesOperations.fetchUserNotices(search));
        } else {
            dispatch(noticesOperations.fetchNoticesByCategory(search));
        }
    };

    return (
        <SearchWrapper>
            <TytleNwes> {lang.findPet} </TytleNwes>
            <SearchForm onSubmit={searchByCategory} className="search-form">
                <SearchInput
                    onChange={e => setFilterValueFunction(e.target.value)}
                    type="text"
                    name="search"
                    value={filterValue}
                    placeholder={lang.search}
                />
             
                    <SearchButton className="search-icon">
                        <BsSearch style={{ color: '#54adff' }} />
                    </SearchButton>
               
            </SearchForm>
        </SearchWrapper>
    );
}
