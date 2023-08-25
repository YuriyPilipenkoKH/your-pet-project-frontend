import React from 'react'
import { TytleNwes,SearchWrapper,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { SearchForm } from 'pages/pages.styled/Pages.styled'
import { FormButton } from 'components/Button/Button'
import {  setFilterNotices } from 'redux/filter/filterSlice'


export default function NoticesSearch() {
  const dispatch = useDispatch()


  return (
    <SearchWrapper>
      <TytleNwes>Find your favorite pet</TytleNwes>
      <SearchForm className="search-form">
          <SearchInput 
          onChange={(e) => dispatch(setFilterNotices(e.target.value))}
          type="text" 
          name="search" 
          placeholder="Search" />
          <FormButton >
            <SearchIcon className="search-icon">
              <BsSearch style = { {color: "#54adff"} }/>
            </SearchIcon>
          </FormButton>
        </SearchForm>
      </SearchWrapper>


  )
}
