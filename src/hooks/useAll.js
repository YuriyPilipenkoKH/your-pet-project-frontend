import { useSelector } from 'react-redux';
import { getNewsFilter, getNoticesFilter } from 'redux/filter/filterSelectors';
import { getNoticesList } from 'redux/notices/notices-selectors';
import { activeIndex, getSorted } from 'redux/sort/sortSelectors';


export const useAll= () => {

    return {
      
        noticesList: useSelector(getNoticesList),
        noticesFilter: useSelector(getNoticesFilter),
        newsFilter: useSelector(getNewsFilter),
        sort: useSelector(getSorted),
        activeIndex: useSelector(activeIndex),
  
    };
  };