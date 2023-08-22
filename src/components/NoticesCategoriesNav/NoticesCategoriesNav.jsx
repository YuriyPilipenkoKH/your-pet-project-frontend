import React from 'react'
import { RadioButton } from '../Button/Button'
import { NavWrap, NavWrapper } from '../../pages/pages.styled/NoticesPage.styled'

export default function NoticesCategoriesNav() {
  return (
    <>
      <NavWrapper >
      <RadioButton>sell</RadioButton>
      <RadioButton>lost/found</RadioButton>
      </NavWrapper>
      <RadioButton >in good hands</RadioButton>
      
     
      <NavWrap >
      <RadioButton>favorite ads</RadioButton>
      <RadioButton>my ads</RadioButton>
      </NavWrap>
    </>
  )
}
