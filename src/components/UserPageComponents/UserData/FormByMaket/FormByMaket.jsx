

import React from 'react'
import { FormEditor, FormStyled, InputStyled, LabelStyled, UserFormWrap, UserPhotoWrap } from './FormByMaket.styled'
import { iconPen } from 'images/icons'
import { Button, OutButton } from 'components/Button/Button'
import { MdOutlineLogout } from 'react-icons/md';


const FormByMaket = () => {


  return (
    <UserFormWrap>
      <UserPhotoWrap  className='UserPhotoWrap' >
      <img/>
      <button>Edit photo</button>
      </UserPhotoWrap>
   
    <FormStyled className='FormStyled'>
      <div>
        <LabelStyled >Name:</LabelStyled>
        <InputStyled type="text" name="name"  />
      </div>
      <div>
        <LabelStyled >Email:</LabelStyled>
        <InputStyled type="email" name="email"  />
      </div>
      <div>
        <LabelStyled >Birthday:</LabelStyled>
        <InputStyled type="date" name="birthday"  />
      </div>
      <div>
        <LabelStyled >Phone:</LabelStyled>
        <InputStyled type="tel" name="phone" />
      </div>
      <div>
        <LabelStyled >City:</LabelStyled>
        <InputStyled type="text" name="city" />
      </div>

      <OutButton  
      className="logoutBtn" >
         <MdOutlineLogout /> Log Out</OutButton>
      {/* <Button
      className="saveBtn"
      type="submit">Save</Button> */}

    </FormStyled>

      <FormEditor>
      {iconPen}
      </FormEditor>

   </UserFormWrap>
      
  )
}

export default FormByMaket
