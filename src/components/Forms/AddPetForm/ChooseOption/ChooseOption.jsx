import {  useEffect, useState } from 'react';
import {
    ButtonOption,
    Form,
    ItemOption,
    ListOption,
    Title,
    WrapperNextBackButton,
} from '../../Forms.styled';
import { Button, ButtonTransparent } from '../../../Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import { iconPawprint } from '../../../../images/icons';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export default function ChooseOption({
    children,
    active,
    activeOption,
    arrayOption,
    nextForm,
    beforeForm,
    stepNumber,
}) {

    const { language} = useAll()
    const [lang, setLang] = useState(langUA)
    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    return (
        <Form addPet>
            <Title addPet> {lang.addPet} </Title>
            {children}
            <ListOption>
                {arrayOption.map((option, index) => {
                    return (
                        <ItemOption key={index}>
                            <ButtonOption
                                onClick={() => {
                                    activeOption(index);
                                }}
                                active={active}
                                currentActive={index + 1}
                                type="button"
                            >
                                {option}
                            </ButtonOption>
                        </ItemOption>
                    );
                })}
            </ListOption>
            <WrapperNextBackButton>
                <ButtonTransparent addPet onClick={() => beforeForm()}>
                    <BiArrowBack /> {stepNumber > 1 ? lang.back : lang.cancel}
                </ButtonTransparent>
                <Button
                    stepNumber={stepNumber}
                    addPet
                    onClick={() => nextForm()}
                >
                    {stepNumber > 2 ? lang.done : lang.next} {iconPawprint}
                </Button>
            </WrapperNextBackButton>
        </Form>
    );
}
