import React from 'react'
import { TytleNwes,SearchWrapper,SearchContainer,SearchIcon,SearchInput } from './NoticesSearch.styled'
import { BsSearch } from 'react-icons/bs'


export default function NoticesSearch() {
  const style = { color: "blue", fontSize: "1em" }


  return (
    <SearchWrapper>
      <TytleNwes>Find your favorite pet</TytleNwes>
      <SearchContainer class="search-container">
      <SearchInput type="text" name="search" placeholder="Search" />
          <SearchIcon class="search-icon">
            <BsSearch style = { style } />
          </SearchIcon>
      </SearchContainer>
      </SearchWrapper>


  )
}
