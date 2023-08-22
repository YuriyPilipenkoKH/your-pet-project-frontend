import React from 'react';
//=============================
import { useState } from 'react';
import CustomPagination from "../components/Pagination/Pagination";

//==============================
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import news from '../components/json/news.json';
import  Pagination  from '../components/Pagination/Pagination';
import { NwesPage, NwesWrapper, SearchContainer, SearchIcon, SearchInput, SearchWrapper, TitleNwes } from './pages.styled/Pages.styled';
import { StyledLink } from '../components/Button/Button.styled';


export const NewsPage = () => {

  const style = { color: "blue", fontSize: "1em" }

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Общее количество страниц
  const totalPages = Math.ceil(news.length / itemsPerPage);
// Индексы новостей на текущей странице
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Новости на текущей странице
const currentNews = news.slice(startIndex, endIndex);

// Функция для обновления текущей страницы
const handlePageChange = (page) => {
  setCurrentPage(page);
};

  return (

    
 
    <NwesWrapper>
      <SearchWrapper>
        <StyledLink to="/test" style={{background: 'transparent'}}>
        <TitleNwes>News</TitleNwes>
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
      <Pagination>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Pagination>
      </NwesWrapper>
     
    
  );
};
