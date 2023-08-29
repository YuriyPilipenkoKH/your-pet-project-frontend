import { useEffect } from 'react';
import NoticesSearch from '../components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from '../components/NoticesFilters/NoticesFilters';
import {
    NoticeContainer,
    NoticesPageWrap,
} from './pages.styled/NoticesPage.styled';
import { MainCard } from '../components/MainCard/MainCard';
import {
    CommonWrapper,
    ListButtonForPagination,
    PaginationButton,
    PaginationWrapper,
} from './pages.styled/Pages.styled';
import { useLocation } from 'react-router-dom';
import { getReRender } from 'redux/notices/notices-selectors';
import { useDispatch, useSelector } from 'react-redux';
import noticesOperations from '../redux/notices/notices-operations';
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import { useAll } from 'hooks/useAll';
import { iconRowLeft } from 'images/icons';
import { useState } from 'react';

export default function NoticesPage() {
    const [itemOffset, setItemOffset] = useState(0);
    const [numButtons, setNumButtons] = useState(5);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const {
        filterByAgeIdx,
        filterByGender,
        noticesList,
        activeIndex,
        totalPages,
        theme,
    } = useAll();
    const dispatch = useDispatch();
    const filterValue = useSelector(getNoticesFilter);
    const reRender = useSelector(getReRender);

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
    const searchParams = {
        NoticesCategoriesNav: makeCategory(),
        query: filterValue,
        page,
    };
    useEffect(() => {
        if (activeIndex === 4) {
            dispatch(noticesOperations.fetchUserNotices(searchParams));
        } else if (activeIndex === 3) {
            dispatch(noticesOperations.fetchAllFavorite(searchParams));
        } else {
            dispatch(noticesOperations.fetchNoticesByCategory(searchParams));
        }
        //    eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reRender, page]);

    const filteredNotices = () => {
        if (filterByGender === 'male') {
            return noticesList.filter(e => e.sex === 'male');
        } else if (filterByGender === 'female') {
            return noticesList.filter(e => e.sex === 'female');
        } else if (filterByAgeIdx === 0) {
            return noticesList.filter(e => calculateAge(e.birthday) <= 1);
        } else if (filterByAgeIdx === 1) {
            return noticesList.filter(e => calculateAge(e.birthday) <= 2);
        } else if (filterByAgeIdx === 2) {
            return noticesList.filter(e => calculateAge(e.birthday) > 2);
        }

        return noticesList;
    };

    useEffect(() => {
        if (totalPages < page) {
            setPage(1);
        }
    }, [totalPages, page]);

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

    useEffect(() => {
        if (noticesList.length > 0) {
            if (totalPages < 4) {
                setNumButtons(totalPages);
            } else if (window.innerWidth <= 768) {
                setNumButtons(4);
            } else {
                setNumButtons(5);
            }

            let start = page - 2;
            let end = page + 2;

            if (page < 3) {
                start = 1;
                end = numButtons;
            } else if (page > totalPages - 2) {
                start = totalPages - numButtons + 1;
                end = totalPages;
            }

            if (page < 1) setPage(1);
            if (page > totalPages) {
                setPage(1);
                setItemOffset(0);
            }
        }
    }, [filterValue, itemOffset, noticesList, numButtons, page, totalPages]);

    const handlePageClick = newPage => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handlePrevPage = () => {
        if (noticesList.length > 0 && page > 1) {
            setPage(prevState => prevState - 1);
        }
    };

    const handleNextPage = () => {
        if (noticesList.length > 0 && page < totalPages) {
            setPage(prevState => prevState + 1);
        }
    };

    let start = page - 2;
    let end = page + 2;

    if (page < 3) {
        start = 1;
        end = numButtons;
    } else if (page > totalPages - 2) {
        start = totalPages - numButtons + 1;
        end = totalPages;
    }
    const pageButtons = [];
    for (let i = start; i <= end; i++) {
        pageButtons.push(
            <PaginationButton
                theme={theme}
                key={i}
                onClick={() => handlePageClick(i)}
                currentButton={i}
                active={page}
            >
                {i}
            </PaginationButton>
        );
    }
    return (
        <CommonWrapper className="CommonWrapper">
            <NoticesSearch search={searchParams} />
            <NoticesPageWrap>
                <NoticesCategoriesNav />
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
                        owner={item.owner._id}
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
            {filteredNotices().length > 0 && (
                <PaginationWrapper>
                    <PaginationButton
                        theme={theme}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            padding: '10px 8px',
                        }}
                        onClick={handlePrevPage}
                    >
                        {iconRowLeft}
                    </PaginationButton>
                    <ListButtonForPagination>
                        {pageButtons}
                    </ListButtonForPagination>
                    <PaginationButton
                        theme={theme}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            transform: 'rotate(180deg)',
                            padding: '10px 8px',
                        }}
                        onClick={handleNextPage}
                    >
                        {iconRowLeft}
                    </PaginationButton>
                </PaginationWrapper>
            )}
        </CommonWrapper>
    );
}
