import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
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

export const NewsPage = () => {
    const [active, setActive] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    const cardsPerPage = 6;
    const endOffset = itemOffset + cardsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = news.slice(itemOffset, endOffset);
    const [numButtons, setNumButtons] = useState(5); 

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

    const handlePageClick = (selectedPage) => {
        const newOffset = selectedPage * cardsPerPage;
        console.log(
            `User requested page number ${selectedPage}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setActive(selectedPage + 1);
    };

    const pageButtons = [];
    for (let i = 0; i < numButtons; i++) {
        const pageNumber = itemOffset / cardsPerPage + i + 1;
        pageButtons.push(
            <PaginationButton
                key={pageNumber}
                onClick={() => handlePageClick(i)}
                currentButton={i + 1}
                active={active}
            >
                {pageNumber}
            </PaginationButton>
        );
    }

    const handlePrevPage = () => {
        if (itemOffset > 0) {
            setItemOffset(itemOffset - cardsPerPage);
        }
    };

    const handleNextPage = () => {
        if (itemOffset + cardsPerPage < news.length) {
            setItemOffset(itemOffset + cardsPerPage);
        }
    };

    return (
        <NewsWrapper>
            <SearchWrapper>
                <StyledLink to="/test" style={{ background: 'transparent' }}>
                    <TytleNwes>News</TytleNwes>
                </StyledLink>
                <SearchForm className="search-form">
                    <SearchInput
                        type="text"
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
            <PaginationWrapper>
                <PaginationButton style={{ display: "flex", alignItems: "center", justifyContent: 'center', backgroundColor: "transparent", padding: "10px 8px" }} onClick={handlePrevPage}>{iconRowLeft}</PaginationButton>
                <ListButtonForPagination>{pageButtons}</ListButtonForPagination>
                <PaginationButton style={{ display: "flex", alignItems: "center", justifyContent: 'center', backgroundColor: "transparent", transform: "rotate(180deg)", padding: "10px 8px" }} onClick={handleNextPage}>{iconRowLeft}</PaginationButton>
            </PaginationWrapper>
        </NewsWrapper>
    );
};
