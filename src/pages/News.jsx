import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import news from '../utils/json/news.json';
import {
    ListButtonForPagination,
    NewsContainer,
    NewsWrapper,
    PaginationButton,
    PaginationWrapper,
    SearchForm,
    SearchIcon,
    SearchInput,
    SearchWrapper,
    TytleNwes,
} from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';
import { FormButton } from 'components/Button/Button';
import { iconRowLeft } from 'images/icons';
import { setFilterNews } from 'redux/filter/filterSlice';
import { getNewsFilter } from 'redux/filter/filterSelectors';

export const NewsPage = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getNewsFilter);
    const [active, setActive] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    const cardsPerPage = 6;
    const endOffset = itemOffset + cardsPerPage;
    const [numButtons, setNumButtons] = useState(5);

    // Функція фільтрації новин
    const filteredNews = () => {
        const normalized = filter.toLowerCase();
        return news.filter(item =>
            item.title.toLowerCase().includes(normalized)
        );
    };

    // Отримання списку новин після фільтрації
    const newsSearch = filteredNews();
    const currentItems = newsSearch.slice(itemOffset, endOffset);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setNumButtons(4);
            } else {
                setNumButtons(5);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Ефект, який оновлює стан компонента при зміні фільтру або сторінки
    useEffect(() => {
        // Ваша логіка оновлення стану тут
        // Наприклад, обчислення totalPages та оновлення active
        if (newsSearch.length > 0) {
            const totalPages = Math.ceil(newsSearch.length / cardsPerPage);

            let start = active - 2;
            let end = active + 2;

            if (active < 3) {
                start = 1;
                end = numButtons;
            } else if (active > totalPages - 2) {
                start = totalPages - numButtons + 1;
                end = totalPages;
            }

            // Перевірка, чи активна сторінка в діапазоні totalPages
            if (active < 1) setActive(1);
            if (active > totalPages) setActive(totalPages);
        }

    }, [filter, itemOffset, newsSearch, cardsPerPage, numButtons, active]);

    // Обробники сторінок
    const handlePageClick = selectedPage => {
        const newOffset = selectedPage * cardsPerPage;
        setItemOffset(newOffset);
        setActive(selectedPage + 1);
    };

    const handlePrevPage = () => {
        if (itemOffset > 0) {
            setItemOffset(itemOffset - cardsPerPage);
            setActive(active - 1);
        }
    };

    const handleNextPage = () => {
        if (itemOffset + cardsPerPage < newsSearch.length) {
            setItemOffset(itemOffset + cardsPerPage);
            setActive(active + 1);
        }
    };

    // Побудова кнопок сторінок на основі стану numButtons
    const totalPages = Math.ceil(newsSearch.length / cardsPerPage);
    let start = active - 2;
    let end = active + 2;

    if (active < 3) {
        start = 1;
        end = numButtons;
    } else if (active > totalPages - 2) {
        start = totalPages - numButtons + 1;
        end = totalPages;
    }

    const pageButtons = [];
    for (let i = start; i <= end; i++) {
        pageButtons.push(
            <PaginationButton
                key={i}
                onClick={() => handlePageClick(i - 1)}
                currentButton={i}
                active={active}
            >
                {i}
            </PaginationButton>
        );
    }

    return (
        <NewsWrapper className='NewsWrapper'>
            <SearchWrapper>
                <StyledLink to="/test" style={{ background: 'transparent' }}>
                    <TytleNwes>News</TytleNwes>
                </StyledLink>
                <SearchForm className="search-form">
                    <SearchInput
                        onChange={e => dispatch(setFilterNews(e.target.value))}
                        type="text"
                        value={filter}
                        name="search"
                        placeholder="Search"
                    />
                    <FormButton>
                        <SearchIcon className="search-icon">
                            <BsSearch style={{ color: '#54adff' }} />
                        </SearchIcon>
                    </FormButton>
                </SearchForm>
            </SearchWrapper>

            <NewsContainer className="NewsContainer">
                {currentItems.map((item, index) => (
                    <NewsCard
                        key={index}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        text={item.text}
                        date={item.date}
                        url={item.url}
                    />
                ))}
            </NewsContainer>
            {newsSearch.length > 0 && <PaginationWrapper>
                <PaginationButton
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        padding: '10px 8px',
                    }}
                    onClick={handlePrevPage}
                >
                    {iconRowLeft}
                </PaginationButton>
                <ListButtonForPagination>{pageButtons}</ListButtonForPagination>
                <PaginationButton
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        transform: 'rotate(180deg)',
                        padding: '10px 8px',
                    }}
                    onClick={handleNextPage}
                >
                    {iconRowLeft}
                </PaginationButton>
            </PaginationWrapper>}
        </NewsWrapper>
    );
};
