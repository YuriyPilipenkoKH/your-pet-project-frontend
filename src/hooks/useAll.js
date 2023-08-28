import { useSelector } from 'react-redux';
import { getFilterByAgeIdx, getFilterByGender,  getNewsFilter, getNoticesFilter } from 'redux/filter/filterSelectors';
import { getLang } from 'redux/lang/langSelectors';
import { getModalIsOpen } from 'redux/modal/modalSelectors';
import { getNoticesList } from 'redux/notices/notices-selectors';
import {  getPets, getPetsList, getPetsRerender } from 'redux/pets/petsSelectors';
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
        filterByGender: useSelector(getFilterByGender),

        theme: useSelector(getTheme),
        language: useSelector(getLang),

        pets: useSelector(getPets),
        listPets: useSelector(getPetsList),
        petsRerender: useSelector( getPetsRerender),
        
  
    };
  };