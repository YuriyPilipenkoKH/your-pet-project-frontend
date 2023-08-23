import React from 'react'
import { TytleNwes,SearchWrapper,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'
import { SearchForm } from 'pages/pages.styled/Pages.styled'
import { FormButton } from 'components/Button/Button'


export default function NoticesSearch() {



  return (
    <SearchWrapper>
      <TytleNwes>Find your favorite pet</TytleNwes>
      <SearchForm className="search-form">
          <SearchInput type="text" name="search" placeholder="Search" />
          <FormButton >
            <SearchIcon className="search-icon">
              <BsSearch style = { {color: "#54adff"} }/>
            </SearchIcon>
          </FormButton>
        </SearchForm>
      </SearchWrapper>


  )
}
