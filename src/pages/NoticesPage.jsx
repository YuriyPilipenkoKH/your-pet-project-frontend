import React, { useEffect } from 'react';
import NoticesSearch from '../components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from '../components/NoticesFilters/NoticesFilters';
import {
    NoticeContainer,
    NoticesPageWrap,
} from './pages.styled/NoticesPage.styled';
import { MainCard } from '../components/MainCard/MainCard';

import { CommonWrapper } from './pages.styled/Pages.styled';
import { useLocation } from 'react-router-dom';
import { getNoticesList } from 'redux/notices/notices-selectors';
import { useDispatch, useSelector } from 'react-redux';
import noticesOperations from '../redux/notices/notices-operations';
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import { activeIndex } from 'redux/sort/sortSelectors';

export default function NoticesPage() {
    const location = useLocation();

    const dispatch = useDispatch();
    const noticesList = useSelector(getNoticesList);
    const filterValue = useSelector(getNoticesFilter);
    const currentIndex = useSelector(activeIndex);

    console.log('noticesList', noticesList);
    console.log('filterValue', filterValue);
    console.log('currentIndex', currentIndex);

    const makeCategory = () => {
        if (currentIndex === 0) {
            return 'sell';
        }
        if (currentIndex === 1) {
            return 'lost-found';
        }
        if (currentIndex === 2) {
            return 'in-good-hands';
        }
        if (currentIndex === 3) {
            return 'favorite-ads';
        }
        if (currentIndex === 4) {
            return 'my-ads';
        }
    };
    console.log('makeCategory ', makeCategory());

    const page = Math.ceil(noticesList?.length / 12);
    console.log('page', page);

    const searchParams = {
        NoticesCategoriesNav: makeCategory(),
        query: filterValue,
        page: 1,
    };

    // const searchByCategory = (e) => {
    //   e.preventDefault()
    //   dispatch(noticesOperations.fetchNoticesByCategory(searchParams))
    // }

    useEffect(() => {
        dispatch(noticesOperations.fetchAllNotices(searchParams));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CommonWrapper className="CommonWrapper">
            <NoticesSearch search={{ searchParams }} />
            <NoticesPageWrap>
                <NoticesCategoriesNav />
                <NoticesFilters state={{ from: location }} />
            </NoticesPageWrap>
            <NoticeContainer className="notice-container">
                {noticesList.map((item, index) => (
                    //  console.log('item',item)
                    <MainCard
                        key={index}
                        index={index}
                        title={item.title}
                        photo={item.photo}
                        sex={item.sex}
                        owner={item.owner}
                        idUsersAddedFavorite={item.idUsersAddedFavorite}
                        location={item.location}
                        category={item.category}
                        birthday={item.birthday}
                        id={item._id}
                    />
                ))}
            </NoticeContainer>
        </CommonWrapper>
    );
}
