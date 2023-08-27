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
import { getReRender } from 'redux/notices/notices-selectors';
import { useDispatch, useSelector } from 'react-redux';
import noticesOperations from '../redux/notices/notices-operations';
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { useAll } from 'hooks/useAll';

export default function NoticesPage() {
    const location = useLocation();
    const { filterByAgeIdx, filterByGender, noticesList, activeIndex } =
        useAll();
    const dispatch = useDispatch();

    const filterValue = useSelector(getNoticesFilter);
    const reRender = useSelector(getReRender);

    const [currentActive, setCurrentActive] = useLocalStorage(
        'currentActive',
        0
    );

    const handleChangeCurrentActive = data => {
        setCurrentActive(data);
    };

    const makeCategory = () => {
        if (activeIndex === 0) {
            return 'sell';
        }
        if (activeIndex === 1) {
            return 'lost-found';
        }
        if (activeIndex === 2) {
            return 'in-good-hands';
        }
        if (activeIndex === 3) {
            return 'favorite-ads';
        }
        if (activeIndex === 4) {
            return 'my-ads';
        }
    };

    const page = Math.ceil(noticesList?.length / 12);

    const searchParams = {
        NoticesCategoriesNav: makeCategory(),
        query: filterValue,
        page: 1,
    };
    useEffect(() => {
        if (activeIndex === 4) {
            dispatch(noticesOperations.fetchUserNotices());
        } else if (activeIndex === 3) {
            dispatch(noticesOperations.fetchAllFavorite());
        } else {
            dispatch(noticesOperations.fetchNoticesByCategory(searchParams));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reRender]);

    const genderFilter = () => {
        if (filterByGender === 'male') {
            return noticesList.filter(e => e.sex === 'male');
        }
        if (filterByGender === 'female') {
            return noticesList.filter(e => e.sex === 'female');
        }
    };

    const filteredNotices = () => {
        if (filterByAgeIdx === 0) {
            return genderFilter().filter(e => calculateAge(e.birthday) <= 1);
        } else if (filterByAgeIdx === 1) {
            return genderFilter().filter(e => calculateAge(e.birthday) <= 2);
        } else if (filterByAgeIdx === 2) {
            return genderFilter().filter(e => calculateAge(e.birthday) > 2);
        }

        return noticesList;
    };

    function calculateAge(birthday) {
        const birthDate = new Date(birthday); // Parse birthday string into Date object
        const currentDate = new Date(); // Current date

        // Calculate age in years
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        // Adjust age if birth date hasn't occurred yet this year
        if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        if (!age) {
            return 1;
        } else if (age <= 0) {
            return 0;
        } else return Number(age);
    }

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
                {filteredNotices().map((item, index) => (
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
