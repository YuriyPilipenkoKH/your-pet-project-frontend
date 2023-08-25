import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import { useDispatch } from 'react-redux';
import news from '../utils/json/news.json';
import {  NewsContainer, NewsWrapper,  SearchForm, SearchIcon, SearchInput, SearchWrapper, TytleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';
import { FormButton } from 'components/Button/Button';
import { setFilterNews } from 'redux/filter/filterSlice';

export const NewsPage = () => {
  const dispatch = useDispatch()

  return (
    <NewsWrapper>
      <SearchWrapper>
        <StyledLink to="/test" style={{background: 'transparent'}}>
        <TytleNwes>News</TytleNwes>
        </StyledLink>
        <SearchForm className="search-form">
          <SearchInput 
           onChange={(e) => dispatch(setFilterNews(e.target.value))}
          type="text" 
          name="search" 
          placeholder="Search" />
          <FormButton >
            <SearchIcon className="search-icon">
              <BsSearch style = { {color: "#54adff"} } />
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