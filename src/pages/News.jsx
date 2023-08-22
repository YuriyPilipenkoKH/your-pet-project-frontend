import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import news from '../components/json/news.json';
import { NwesPage, NwesWrapper, SearchContainer, SearchIcon, SearchInput, SearchWrapper, TytleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';

export const NewsPage = () => {
  const style = { color: "blue", fontSize: "1em" }
  return (
    <NwesWrapper>
      <SearchWrapper>
        <StyledLink to="/test" style={{background: 'transparent'}}>
        <TytleNwes>News</TytleNwes>
        </StyledLink>
        <SearchContainer className="search-container">
          <SearchInput type="text" name="search" placeholder="Search" />
          <SearchIcon className="search-icon">
            <BsSearch style = { style } />
          </SearchIcon>
        </SearchContainer>
      </SearchWrapper>
      <NwesPage className="news-page">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            text={item.text}
            date={item.date}
            url={item.url}
          />
        ))}
      </NwesPage>
    </NwesWrapper>
  );
};
