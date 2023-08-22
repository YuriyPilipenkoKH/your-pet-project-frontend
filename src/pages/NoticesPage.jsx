import React from 'react'
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticesPageWrap } from './pages.styled/NoticesPage.styled'
import { MainCard } from '../components/MainCard/MainCard'
import { NewsCard } from '../components/News/NewsCard'
import news from '../components/json/news.json';





export default function NoticesPage() {
  return (
    <>
    <NoticesSearch/>
      <NoticesPageWrap >
      <NoticesCategoriesNav/>
      <NoticesFilters/>
      </NoticesPageWrap>
      <MainCard className="main-card">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            
          />
        ))}
      </MainCard>
      </>
  )
}
