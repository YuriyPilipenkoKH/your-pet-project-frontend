
import { TytleNwes,SearchWrapper,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'
import { useDispatch , useSelector} from 'react-redux';
import { SearchForm } from 'pages/pages.styled/Pages.styled'
import { FormButton } from 'components/Button/Button'
import {  setFilterNotices } from 'redux/filter/filterSlice'
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import noticesOperations from "../../redux/notices/notices-operations"
import { useAll } from 'hooks/useAll';



export default function NoticesSearch({search}) {
  const dispatch = useDispatch()
  const { activeIndex } = useAll()
  const filter = useSelector(getNoticesFilter)

  const searchByCategory = (e) => {
    e.preventDefault()
    if(activeIndex === 3){
      dispatch(noticesOperations.fetchAllFavorite());
  }
  else{
      dispatch(noticesOperations.fetchNoticesByCategory(search));

  }
  }

  return (
    <SearchWrapper>
      <TytleNwes>Find your favorite pet</TytleNwes>
      <SearchForm 
       onSubmit = {searchByCategory}
       className="search-form">
          <SearchInput 
          onChange={(e)=> dispatch(setFilterNotices(e.target.value))}
          type="text" 
          name="search" 
          value={filter}
          placeholder="Search"
           />
          <FormButton >
            <SearchIcon className="search-icon">
              <BsSearch style = { {color: "#54adff"} }/>
            </SearchIcon>
          </FormButton>
        </SearchForm>
      </SearchWrapper>


  )
}
