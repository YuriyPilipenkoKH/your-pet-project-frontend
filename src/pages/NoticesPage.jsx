
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticeContainer, NoticesPageWrap } from './pages.styled/NoticesPage.styled'
import { MainCard } from '../components/MainCard/MainCard'

import news from '../utils/json/news.json';





export default function NoticesPage() {


  

  return (
    <>
    <NoticesSearch/>
      <NoticesPageWrap >
         <NoticesCategoriesNav/>
         <NoticesFilters  />
      </NoticesPageWrap>
      <NoticeContainer className="notice-container">
        {news.map((item, index) => (
          <MainCard
            key={index}
            
          />
        ))}
      </NoticeContainer>


      
      </>
  )
}
