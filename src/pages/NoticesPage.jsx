
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticeContainer, NoticesPageWrap } from './pages.styled/NoticesPage.styled'
import { MainCard } from '../components/MainCard/MainCard'
import news from '../utils/json/news.json';
import { CommonWrapper } from './pages.styled/Pages.styled'
import { useLocation } from 'react-router-dom'


export default function NoticesPage() {
  const location = useLocation();


  
  return (
    <CommonWrapper>
    <NoticesSearch/>
      <NoticesPageWrap >
         <NoticesCategoriesNav/>
         <NoticesFilters state={{ from: location }} />
      </NoticesPageWrap>
      <NoticeContainer className="notice-container">
        {news.map((item, index) => (
          <MainCard
            key={index}
            
          />
        ))}
      </NoticeContainer>
    </CommonWrapper>
  )
}
