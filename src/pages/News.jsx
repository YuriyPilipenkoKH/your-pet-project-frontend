import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import news from '../utils/json/news.json';
import {  NewsContainer, NewsWrapper,  SearchForm, SearchIcon, SearchInput, SearchWrapper, TytleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';
import { FormButton } from 'components/Button/Button';
import { setFilterNews } from 'redux/filter/filterSlice';
import { getNewsFilter } from 'redux/filter/filterSelectors';

export const NewsPage = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getNewsFilter)

  const filteredNews = () => {
    const normalized = filter.toLowerCase();
     const filteredTitles = news.filter(item =>
             item.title.toLowerCase().includes(normalized)
    );
    
    return [...filteredTitles]
};


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
          value={filter}
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
        {filteredNews().map((item, index) => (
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