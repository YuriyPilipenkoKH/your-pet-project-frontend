import React, { useState } from 'react';
import {
    ButtonSubmit,
    Form,
    IconCrossValidate,
    IconOkey,
    Input,
    LabelForRegistration,
    LinkToForm,
    Question,
    ShowPasswordButton,
    TextValidation,
    Title,
} from '../Forms.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconCross, iconEyes } from '../../../images/icons';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

const schema = object({
    name: string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Enter a valid Name'
        )
        .required(),
    email: string()
        .matches(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            'Enter a valid Email'
        )
        .required(),
    password: string().matches(/.{7,}/, 'Enter a valid password').required(),
    confirmPassword: string()
        .matches(/.{7,}/, 'Enter a valid password')
        .required(),
}).required();

export default function RegisterForm() {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordlValid] = useState(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordlValid] =
        useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });
    const handleClickShowOne = () => setShowOne(!showOne);
    const handleClickShowTwo = () => setShowTwo(!showTwo);
    const deliveryDataUser = (name, email, password, confirmPassword) => {
        // dispatch(
        //     registerUser({
        //         name,
        //         email,
        //         password,
        //     })
        // );
    };
    const deliveryData = data => {
        console.log(321321);
        const { name, email, password, confirmPassword } = data;
        deliveryDataUser(name, email, password, confirmPassword);
        reset();
    };

    return (
        <Form>
            <form onSubmit={handleSubmit(deliveryData)}>
                <Title>Registration</Title>
                <LabelForRegistration>
                <Input
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder="Name"
                        type="text"
                        style={{
                            border: errors.name
                                ? '1px solid var(--red)'
                                : isNameValid && !errors.name
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
                                    e.target.value
                                );
                            setIsNameValid(isValid);
                            if (isValid) {
                                errors.name = undefined;
                            }
                        }}
                    ></Input>
                    {isNameValid && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.name && (
                        <>
                            <TextValidation>
                                {errors.name.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsNameValid(false);
                                    reset({
                                        name: '',
                                    });
                                }}
                                type="button"
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForRegistration>
                <LabelForRegistration>
                <Input
                        {...register('email')}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder="Email"
                        type="email"
                        style={{
                            border: errors.email
                                ? '1px solid var(--red)'
                                : isEmailValid && !errors.email
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
                                    e.target.value
                                );
                            setIsEmailValid(isValid);
                            if (isValid) {
                                errors.email = undefined;
                            }
                        }}
                    ></Input>
                    {isEmailValid && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.email && (
                        <>
                            <TextValidation>
                                {errors.email.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsEmailValid(false);
                                    reset({
                                        email: '',
                                    });
                                }}
                                type="button"
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForRegistration>

                <LabelForRegistration>
                    <Input
                        {...register('password')}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        placeholder="Password"
                        type={showOne ? 'text' : 'password'}
                        style={{
                            border: errors.password
                                ? '1px solid var(--red)'
                                : isPasswordValid && !errors.password
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /.{7,}/.test(e.target.value);
                            setIsPasswordlValid(isValid);
                            if (isValid) {
                                errors.password = undefined;
                            }
                        }}
                    ></Input>
                    {isPasswordValid && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            iconPassowrd
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.password && (
                        <>
                            <TextValidation>
                                {errors.password.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsPasswordlValid(false);
                                    reset({
                                        password: '',
                                    });
                                }}
                                type="button"
                                iconPassowrd
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                    <ShowPasswordButton type="button" onClick={handleClickShowOne}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForRegistration>
                <LabelForRegistration registration={true}>
                    <Input
                        {...register('confirmPassword')}
                        aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                        placeholder="Confirm password"
                        type={showTwo ? 'text' : 'password'}
                        style={{
                            border: errors.confirmPassword
                                ? '1px solid var(--red)'
                                : isConfirmPasswordValid && !errors.confirmPassword
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /.{7,}/.test(e.target.value);
                            setIsConfirmPasswordlValid(isValid);
                            if (isValid) {
                                errors.confirmPassword = undefined;
                            }
                        }}
                    ></Input>
                    {isConfirmPasswordValid && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            iconPassowrd
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.confirmPassword && (
                        <>
                            <TextValidation>
                                {errors.confirmPassword.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsConfirmPasswordlValid(false);
                                    reset({
                                        confirmPassword: '',
                                    });
                                }}
                                type="button"
                                iconPassowrd
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                    <ShowPasswordButton
                        type="button"
                        onClick={handleClickShowTwo}
                    >
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForRegistration>
                <ButtonSubmit type="submit">Registration</ButtonSubmit>
                <Question>
                    Don't have an account?{' '}
                    {
                        <LinkToForm href="fwefew" to="/login">
                            Login
                        </LinkToForm>
                    }
                </Question>
            </form>
        </Form>
    );
}
