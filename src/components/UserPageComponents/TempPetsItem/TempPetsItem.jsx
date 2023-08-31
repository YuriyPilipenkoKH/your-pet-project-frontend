
import React from 'react'
import { PetImage } from '../PetsItem/PetsItem.styled'
import PetAvatar from '../../../images/dog.png'
import { TempCard } from './TempPetsItem.styled'
import {  useEffect, useState } from 'react';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export  const TempPetsItem = () => {
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

  return (
    <TempCard>
         <PetImage
            src={PetAvatar}
            alt="mypet's avatar"
            />
      <h2 style={{ color: "var(--text-color)" }}> { lang.temp } </h2>
    </TempCard>
  )
}

 
