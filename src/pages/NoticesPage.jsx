import React from 'react'
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticesPageWrap } from './pages.styled/NoticesPage.styled'

export default function NoticesPage() {
  return (
    <>
    <NoticesSearch/>
      <NoticesPageWrap >
      <NoticesCategoriesNav/>
      <NoticesFilters/>
      </NoticesPageWrap>
      </>
  )
}
