

import React from 'react'
import { FormEditor, FormStyled, InputStyled, LabelStyled, UserFormWrap } from './FormByMaket.styled'
import { iconPen } from 'images/icons'
import { Button } from 'components/Button/Button'

const FormByMaket = () => {



  return (
    <UserFormWrap>
      <div>
      <img/>
      <button>Edit photo</button>
      </div>
   
    <FormStyled>
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
    </FormStyled>

      <Button
      className="saveBtn"
      type="submit">Save</Button>
      <FormEditor>
      {iconPen}
      </FormEditor>

   </UserFormWrap>
      
  )
}

export default FormByMaket
