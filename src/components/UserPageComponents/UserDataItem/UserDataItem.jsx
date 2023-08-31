import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';
import {  useEffect, useState } from 'react';

import {
    FormWrapper,
    FormItem,
    FormLabel,
    EditInpuButton,
    FormInput,
    InputName,
    EditIc,
    ConfirmIcon,
    ErrorContainer,
} from './UserDataItem.styled';
import { langEN, langUA } from 'utils/languages';
import { useAll } from 'hooks/useAll';

const UserDataItem = ({
    label,
    name,
    value,
    isdisabled,
    handleClick,
    formik,
    formErrors,
    setFormErrors,
    onSubmit,
    ...props
}) => {
    const newLabel = label.slice(0, -1)
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
   
    const id = useMemo(() => nanoid(), []);

    const handleActiveClick = name => {
        handleClick(name);
    };

    return (
        <FormWrapper>
            <FormItem>
        
                <InputName className='InputName'>{lang[newLabel]}</InputName>
                <FormLabel htmlFor={id}></FormLabel>
                {!!isdisabled && (
                    <EditInpuButton
                        type="button"
                        onClick={() => handleActiveClick(name)}
                    >
                        <EditIc />
                    </EditInpuButton>
                )}
                {!isdisabled && (
                    <EditInpuButton
                        type="button"
                        disabled={!formik.isValid}
                        onClick={() => onSubmit(formik.values, name)}
                    >
                        <ConfirmIcon stroke="#00C3AD" />
                    </EditInpuButton>
                )}
                <FormInput
                    autoComplete="off"
                    id={id}
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                    disabled={isdisabled}
                    touched={
                        formik.touched[name]
                            ? formik.touched[name].toString()
                            : ''
                    }
                    error={formik.errors[name]}
                    {...props}
                />
                <ErrorMessage name={name}>
                    {msg => (
                        <ErrorContainer>
                            {formErrors[name] || msg}
                        </ErrorContainer>
                    )}
                </ErrorMessage>
            </FormItem>
        </FormWrapper>
    );
};

export default UserDataItem;
