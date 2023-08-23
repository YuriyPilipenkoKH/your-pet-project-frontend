import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import news from '../utils/json/news.json';
import {  NewsContainer, NewsWrapper,  SearchContainer, SearchIcon, SearchInput, SearchWrapper, TytleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';

export const NewsPage = () => {
  const style = { color: "blue", fontSize: "1em" }
  return (
    <NewsWrapper>
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
      <NewsContainer className="NewsContainer">
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
      </NewsContainer>
    </NewsWrapper>
  );
};