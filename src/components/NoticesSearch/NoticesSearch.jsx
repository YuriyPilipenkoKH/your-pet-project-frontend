import { useEffect, useState } from 'react';
import { TytleNwes, SearchWrapper, SearchInput } from './NoticesSearch.styled';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';

import noticesOperations from '../../redux/notices/notices-operations';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import {
    SearchButton,
    SearchForm,
} from 'pages/pages.styled/NoticesPage.styled';
import { IconWrapp, SearchIcon } from 'pages/pages.styled/Pages.styled';

export default function NoticesSearch({
    search,
    resetFilterValue,
    setFilterValueFunction,
    filterValue,
    activeIndex,
}) {
    const { language, noticesFilter } = useAll();
    const [lang, setLang] = useState(langUA);

    const dispatch = useDispatch();

    const clearInput = e => {
        resetFilterValue();
        // dispatch(setFilterNews(''))
    };
    const onInputChange = e => {
        // dispatch(setFilterNews(e.target.value))
    };

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
    // onSubmit={searchByCategory} className="search-form"
    return (
        <SearchWrapper>
            <TytleNwes> {lang.findPet} </TytleNwes>/
            <SearchForm onSubmit={searchByCategory} className="search-form">
                <SearchInput
                    onChange={e => setFilterValueFunction(e.target.value)}
                    type="text"
                    name="search"
                    value={filterValue}
                    placeholder={lang.search}
                />
                <IconWrapp className="IconWrapp-notices">
                    {filterValue && (
                        <SearchIcon
                            type="button"
                            onClick={clearInput}
                            className="search-cross"
                        >
                            <RxCross1 style={{ color: '#ffc107' }} />
                        </SearchIcon>
                    )}
                    <SearchIcon type="submit" className="search-lens">
                        <BsSearch
                            // onClick={(e) =>   dispatch(setFilterNews(e.target.value))}
                            style={{ color: '#54adff' }}
                        />
                    </SearchIcon>
                </IconWrapp>
            </SearchForm>
        </SearchWrapper>
    );
}
