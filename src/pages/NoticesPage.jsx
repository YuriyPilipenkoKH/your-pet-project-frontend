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
import { getNoticesList, getReRender } from 'redux/notices/notices-selectors';
import { useDispatch, useSelector } from 'react-redux';
import noticesOperations from '../redux/notices/notices-operations';
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import { activeIndex } from 'redux/sort/sortSelectors';
import { useLocalStorage } from 'hooks/useLocalStaoreage';

export default function NoticesPage() {
    const location = useLocation();

    const dispatch = useDispatch();

    const noticesList = useSelector(getNoticesList);
    const filterValue = useSelector(getNoticesFilter);
    const currentIndex = useSelector(activeIndex);
    const reRender = useSelector(getReRender);
    console.log(reRender)
    const [currentActive, setCurrentActive] = useLocalStorage(
        'currentActive',
        0
    );

    const handleChangeCurrentActive = data => {
        setCurrentActive(data);
    };

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

    const page = Math.ceil(noticesList?.length / 12);
    console.log('page', page);

    const searchParams = {
        NoticesCategoriesNav: makeCategory(),
        query: filterValue,
        page: 1,
    };

    // const notices = dispatch(noticesOperations.fetchNoticesByCategory(searchParams));

    // const searchByCategory = (e) => {
    //   e.preventDefault()
    //   dispatch(noticesOperations.fetchNoticesByCategory(searchParams))
    // }
    // dispatch(noticesOperations.fetchNoticesByCategory(searchParams))
    useEffect(() => {
        dispatch(noticesOperations.fetchNoticesByCategory(searchParams));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reRender]);

    return (
        <CommonWrapper className="CommonWrapper">
            <NoticesSearch search={searchParams} />
            <NoticesPageWrap>
                <NoticesCategoriesNav
                    handleChangeCurrentActive={handleChangeCurrentActive}
                    currentActive={currentActive}
                />
                <NoticesFilters state={{ from: location }} />
            </NoticesPageWrap>
            <NoticeContainer className="notice-container">
                {noticesList.map((item, index) => (
                    //  console.log('item',item)
                    <MainCard
                        key={index}
                        index={index}
                        title={item.title}
                        petAvatarURL={item.petAvatarURL}
                        sex={item.sex}
                        owner={item.owner}
                        idUsersAddedFavorite={item.idUsersAddedFavorite}
                        location={item.location}
                        category={item.category}
                        birthday={item.birthday}
                        name={item.name}
                        comments={item.comments}
                        type={item.type}
                        id={item._id}
                    />
                ))}
            </NoticeContainer>
        </CommonWrapper>
    );
}
