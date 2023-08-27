import React, { useState } from 'react';
import {
    Form,
    IconCrossValidate,
    IconOkey,
    InputForAddPet,
    LabelForAdd,
    TextValidation,
    Title,
    TypeInput,
    WrapperNextBackButton,
} from '../../../Forms.styled';
import { Button, ButtonTransparent } from '../../../../Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import { IconCross, iconPawprint } from '../../../../../images/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useLocalStorage } from 'hooks/useLocalStaoreage';

const schema = object({
    title: string()
        .required('Title is required')
        .min(2, 'Title should be at least 2 characters')
        .max(50, 'Title should not exceed 50 characters')
        .matches(
            /^[a-zA-Zа-яА-Я0-9\s]+$/,
            'Title should contain only letters, numbers, and spaces'
        ),
    name: string()
        .required()
        .min(2, 'Name should be at least 2 characters')
        .max(16, 'Name should not exceed 16 characters')
        .matches(
            /^[a-zA-Z]{2,16}$/,
            'Name should contain only letters and without spaces'
        ),
    birth: string()
        .required()
        .matches(
            /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(0[0-9]{1,3}|20[0-2][0-3])$/,
            'Enter a valid date in DD-MM-YYYY format'
        ),
    typePet: string()
        .required()
        .min(2)
        .max(16)
        .matches(/^[a-zA-Z]{2,16}$/, 'Type should contain only letters'),
}).required();

export default function PersonalDetails({
    children,
    nextForm,
    beforeForm,
    stepNumber,
    deliveryDataPet,
}) {
    const [isNameValid, setIsNameValid] = useState(false);
    const [isBirthValid, setIsBirthValid] = useState(false);
    const [isTypeValid, setIsTypeValid] = useState(false);
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [title, setTitle] = useLocalStorage('titleLost', '');
    const [name, setName] = useLocalStorage('nameLost', '');
    const [birth, setBirth] = useLocalStorage('birthLost', '');
    const [typePet, setTypePet] = useLocalStorage('typeLost', '');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            name: '',
            birth: '',
            typePet: '',
        },
        resolver: yupResolver(schema),
    });
    const reset = () => {
        setName('');
        setBirth('');
        setTypePet('');
        setTitle('');
        setIsTitleValid(false);
        setIsNameValid(false);
        setIsBirthValid(false);
        setIsTypeValid(false);
    };
    const deliveryData = data => {
        const { name, birth, typePet, title } = data;
        deliveryDataPet({ name, birthday: birth, type: typePet, title });
        nextForm();
        reset();
    };

    return (
        <Form addPet>
            <Title addPet>Add lost pet</Title>
            {children}
            <form
                onSubmit={handleSubmit(deliveryData)}
                style={{ marginTop: '16px' }}
            >
                <LabelForAdd>
                    <TypeInput>Title of add</TypeInput>
                    <InputForAddPet
                        {...register('title')}
                        aria-invalid={errors.title ? 'true' : 'false'}
                        placeholder="Title of add"
                        type="text"
                        value={title}
                        style={{
                            border: errors.title
                                ? '1px solid var(--red)'
                                : isTitleValid && !errors.title
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[a-zA-Zа-яА-Я0-9\s]+$/.test(
                                e.target.value
                            );
                            setIsTitleValid(isValid);
                            setTitle(e.target.value);
                            if (isValid) {
                                errors.title = undefined;
                            }
                        }}
                    ></InputForAddPet>
                    {isTitleValid && !errors.title && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            addPet
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.title && (
                        <>
                            <TextValidation addPet>
                                {errors.title.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsTitleValid(false);
                                    setTitle('');
                                }}
                                type="button"
                                addPet
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForAdd>
                <LabelForAdd>
                    <TypeInput>Pet’s name</TypeInput>
                    <InputForAddPet
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder="Type name pet"
                        type="text"
                        value={name}
                        style={{
                            border: errors.name
                                ? '1px solid var(--red)'
                                : isNameValid && !errors.name
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[a-zA-Z]{2,16}$/.test(
                                e.target.value
                            );
                            setIsNameValid(isValid);
                            setName(e.target.value);
                            if (isValid) {
                                errors.name = undefined;
                            }
                        }}
                    ></InputForAddPet>
                    {isNameValid && !errors.name && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            addPet
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.name && (
                        <>
                            <TextValidation addPet>
                                {errors.name.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsNameValid(false);
                                    setName('');
                                }}
                                type="button"
                                addPet
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForAdd>
                <LabelForAdd>
                    <TypeInput>Date of birth</TypeInput>
                    <InputForAddPet
                        {...register('birth')}
                        aria-invalid={errors.birth ? 'true' : 'false'}
                        placeholder="Type date of birth"
                        type="text"
                        value={birth}
                        style={{
                            border: errors.birth
                                ? '1px solid var(--red)'
                                : isBirthValid && !errors.birth
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(0[0-9]{1,3}|20[0-2][0-3])$/.test(
                                    e.target.value
                                );
                            setIsBirthValid(isValid);
                            setBirth(e.target.value);
                            if (isValid) {
                                errors.birth = undefined;
                            }
                        }}
                    ></InputForAddPet>
                    {isBirthValid && !errors.birth && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            addPet
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.birth && (
                        <>
                            <TextValidation addPet>
                                {errors.birth.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsBirthValid(false);
                                    setBirth('');
                                }}
                                type="button"
                                addPet
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForAdd>
                <LabelForAdd yourPet>
                    <TypeInput>Type</TypeInput>
                    <InputForAddPet
                        {...register('typePet')}
                        aria-invalid={errors.typePet ? 'true' : 'false'}
                        placeholder="Type of pet"
                        type="text"
                        value={typePet}
                        style={{
                            border: errors.typePet
                                ? '1px solid var(--red)'
                                : isTypeValid && !errors.typePet
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[a-zA-Z]{2,16}$/.test(
                                e.target.value
                            );
                            setIsTypeValid(isValid);
                            setTypePet(e.target.value);
                            if (isValid) {
                                errors.typePet = undefined;
                            }
                        }}
                    ></InputForAddPet>
                    {isTypeValid && !errors.typePet && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            addPet
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.typePet && (
                        <>
                            <TextValidation addPet>
                                {errors.typePet.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsTypeValid(false);
                                    setTypePet('');
                                }}
                                type="button"
                                addPet
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForAdd>
                <WrapperNextBackButton>
                    <ButtonTransparent addPet onClick={() => beforeForm()}>
                        <BiArrowBack /> {stepNumber > 1 ? 'Back' : 'Cancel'}
                    </ButtonTransparent>
                    <Button stepNumber={stepNumber} addPet type="submit">
                        {stepNumber > 2 ? 'Done' : 'Next'} {iconPawprint}
                    </Button>
                </WrapperNextBackButton>
            </form>
        </Form>
    );
}
