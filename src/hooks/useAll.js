import { useSelector } from 'react-redux';
import { getFilterByAgeIdx, getFilterByGender,  getNewsFilter, getNoticesFilter } from 'redux/filter/filterSelectors';
import { getLang } from 'redux/lang/langSelectors';
import { getModalIsOpen } from 'redux/modal/modalSelectors';
import { getNoticesList } from 'redux/notices/notices-selectors';
import { getCategory, getPets, getPetsList } from 'redux/pets/petsSelectors';
import { activeIndex, getSorted } from 'redux/sort/sortSelectors';
import { getTheme } from 'redux/theme/themeSelectors';


export const useAll= () => {

    return {
      
        noticesList: useSelector(getNoticesList),
        sort: useSelector(getSorted),
        activeIndex: useSelector(activeIndex),
        modalIsOpen: useSelector(getModalIsOpen),
        
        noticesFilter: useSelector(getNoticesFilter),
        newsFilter: useSelector(getNewsFilter),
        filterByAgeIdx: useSelector(getFilterByAgeIdx),
        filterByGenderIdx: useSelector(getFilterByGender),

        theme: useSelector(getTheme),
        lang: useSelector(getLang),

        pets: useSelector(getPets),
        listPets: useSelector(getPetsList),
        category: useSelector(getCategory),
  
    };
  };