import { ReactComponent as PlusIcon } from '../../images/addPetBtnIcons/plus.svg';
import {ReactComponent as PlusSmallIcon} from '../../images/addPetBtnIcons/plus-small.svg'
import { useWindowSize } from '../../hooks/useWindowSize';
import { Btn } from './AddPetButton.styled';
import { useAll } from 'hooks/useAll';
import {  useEffect, useState } from 'react';
import { langEN, langUA } from 'utils/languages';

const AddPetBtn = ({ state }) => {

    const [screenWidth] = useWindowSize();

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
    return (
        <Btn to={`/add-pet`} state={ state }>
            {screenWidth < 768 && <PlusIcon />}
            {lang.addPet}
            {screenWidth >= 768 && <PlusSmallIcon />}
        </Btn>
    );
};

export default AddPetBtn;
