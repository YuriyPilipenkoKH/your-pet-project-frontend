import { ReactComponent as PlusIcon } from '../../images/addPetBtnIcons/plus.svg';
import {ReactComponent as PlusSmallIcon} from '../../images/addPetBtnIcons/plus-small.svg'
import { useWindowSize } from '../../hooks/useWindowSize';
import { Btn } from './AddPetButton.styled';

const AddPetBtn = () => {
    const [screenWidth] = useWindowSize();

    return (
        <Btn>
            {screenWidth < 768 && <PlusIcon />}
            Add Pet
            {screenWidth >= 768 && <PlusSmallIcon />}
        </Btn>
    );
};

export default AddPetBtn;
