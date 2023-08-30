
import React from 'react'
import { PetImage } from '../PetsItem/PetsItem.styled'
import PetAvatar from '../../../images/dog.png'
import { TempCard } from './TempPetsItem.styled'

export  const TempPetsItem = () => {

  return (
    <TempCard>
         <PetImage
            src={PetAvatar}
            alt="mypet's avatar"
            />
      <h2>Your favorite pets will be added here </h2>
    </TempCard>
  )
}

 
