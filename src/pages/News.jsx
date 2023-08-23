import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import news from '../utils/json/news.json';
import {  NewsContainer, NewsWrapper,  SearchForm, SearchIcon, SearchInput, SearchWrapper, TytleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';
import { FormButton } from 'components/Button/Button';

export const NewsPage = () => {
  const style = { color: "blue", fontSize: "1em" }
  return (
    <NewsWrapper>
      <SearchWrapper>
        <StyledLink to="/test" style={{background: 'transparent'}}>
        <TytleNwes>News</TytleNwes>
        </StyledLink>
        <SearchForm className="search-form">
          <SearchInput type="text" name="search" placeholder="Search" />
          <FormButton >
            <SearchIcon className="search-icon">
              <BsSearch style = { style } />
            </SearchIcon>
          </FormButton>
        </SearchForm>
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