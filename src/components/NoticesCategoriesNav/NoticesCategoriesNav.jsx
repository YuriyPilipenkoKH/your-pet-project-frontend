import React from 'react'
import { RadioButton } from '../Button/Button'
import {  NavWrapper } from '../../pages/pages.styled/NoticesPage.styled'
// import { iconFilter } from '../../images/icons'
import { BtnWrap } from './NoticesCategoriesNav.styled'
import { NavWrap } from 'components/Nav/Nav.styled'

export default function NoticesCategoriesNav() {
  return (
    <>
      <NavWrapper >

      <BtnWrap>
        <RadioButton>sell</RadioButton>
        <RadioButton>lost/found</RadioButton>
        <RadioButton >in good hands</RadioButton>
  
        {/* <BtnWrap> */}
        <RadioButton>favorite ads</RadioButton>
        <RadioButton>my ads</RadioButton>
        {/* </BtnWrap> */}
      </BtnWrap>
                 
      <NavWrap >
      </NavWrap>

      </NavWrapper>
    </>
  )
}
