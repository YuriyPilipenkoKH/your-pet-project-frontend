
import { TytleNwes,SearchWrapper,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'
import { useDispatch , useSelector} from 'react-redux';
import { SearchForm } from 'pages/pages.styled/Pages.styled'
import { FormButton } from 'components/Button/Button'
import {  setFilterNotices } from 'redux/filter/filterSlice'
import { getNoticesFilter } from 'redux/filter/filterSelectors';



export default function NoticesSearch({search}) {
  const dispatch = useDispatch()
  const filter = useSelector(getNoticesFilter)

  

  return (
    <SearchWrapper>
      <TytleNwes>Find your favorite pet</TytleNwes>
      <SearchForm className="search-form">
          <SearchInput 
          onChange={(e)=> dispatch(setFilterNotices(e.target.value))}
          type="text" 
          name="search" 
          value={filter}
          placeholder="Search"
           />
          <FormButton onClick = {search}>
            <SearchIcon className="search-icon">
              <BsSearch style = { {color: "#54adff"} }/>
            </SearchIcon>
          </FormButton>
        </SearchForm>
      </SearchWrapper>


  )
}
