import {  useEffect, useState } from 'react';
import { TytleNwes,SearchWrapper,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'
import { useDispatch , useSelector} from 'react-redux';
import { SearchForm } from 'pages/pages.styled/Pages.styled'
import { FormButton } from 'components/Button/Button'
import {  setFilterNotices } from 'redux/filter/filterSlice'
import { getNoticesFilter } from 'redux/filter/filterSelectors';
import noticesOperations from "../../redux/notices/notices-operations"
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';



export default function NoticesSearch({search}) {

  const { language} = useAll()
  const [lang, setLang] = useState(langUA)

  const dispatch = useDispatch()
  const { activeIndex } = useAll()
  // console.log('activeIndex',activeIndex)
  const filter = useSelector(getNoticesFilter)

  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

  const searchByCategory = (e) => {

    e.preventDefault()
    if(activeIndex === 3){
      dispatch(noticesOperations.fetchAllFavorite(search));
  }
   else if(activeIndex === 4){
      dispatch(noticesOperations.fetchUserNotices(search));
  }
  else{
      dispatch(noticesOperations.fetchNoticesByCategory(search));

  }
  }

  return (
    <SearchWrapper>
      <TytleNwes> {lang.findPet} </TytleNwes>
      <SearchForm 
       onSubmit = {searchByCategory}
       className="search-form">
          <SearchInput 
          onChange={(e)=> dispatch(setFilterNotices(e.target.value))}
          type="text" 
          name="search" 
          value={filter}
          placeholder={lang.search}
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
