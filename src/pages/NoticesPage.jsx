import React from 'react'
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticesPageWrap } from './pages.styled/NoticesPage.styled'
import { MainCard } from '../components/MainCard/MainCard'

import news from '../components/json/news.json';
import { NwesPage } from './pages.styled/Pages.styled'





export default function NoticesPage() {
  return (
    <>
    <NoticesSearch/>
      <NoticesPageWrap >
      <NoticesCategoriesNav/>
      <NoticesFilters/>
      </NoticesPageWrap>
      <NwesPage className="notice-page">
        {news.map((item, index) => (
          <MainCard
            key={index}
            
          />
        ))}
      </NwesPage>
      </>
  )
}
