import React, { useEffect, useState } from 'react'
import NoticesSearch from '../components/NoticesSearch/NoticesSearch'
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav'
import NoticesFilters from '../components/NoticesFilters/NoticesFilters'
import { NoticesPageWrap } from './pages.styled/NoticesPage.styled'
import { MainCard } from '../components/MainCard/MainCard'

// import news from '../utils/json/news.json';
import { NewsContainer} from './pages.styled/Pages.styled'
import { useDispatch, useSelector } from 'react-redux';
import noticesOperations from "../redux/notices/notices-operations"
import { getNoticesList } from 'redux/notices/notices-selectors'





export default function NoticesPage() {
  const dispatch = useDispatch();
const noticesList = useSelector(getNoticesList)
console.log(noticesList);
const [notices, setNotices] = useState([]);
  
// useEffect(() => {
//   setNotices(noticesList);
// }, [noticesList]);

//   useEffect(() => {
//     dispatch(noticesOperations.fetchAllNotices()).then((data)=>setNotices(data));
// }, [dispatch, noticesList]);

useEffect(() => {
  dispatch(noticesOperations.fetchAllNotices())
    .then((data) => {
      console.log(data);
      setNotices(data);
    })
    .catch((error) => {
      console.error('Error fetching notices:', error);
    });
}, [dispatch]);


  return (
    <>
    <NoticesSearch/>
      <NoticesPageWrap >
         <NoticesCategoriesNav/>
         <NoticesFilters/>
      </NoticesPageWrap>
      <NewsContainer className="notice-container">
        {noticesList.map((item, index) => (
       
          <MainCard
            key={index}
            title ={ item.title}
            
          />
        ))}
      </NewsContainer>
      </>
  )
}
