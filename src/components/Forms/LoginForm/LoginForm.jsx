import React, { useEffect, useState } from 'react';
import {
    ButtonSubmit,
    Form,
    IconCrossValidate,
    IconOkey,
    Input,
    LabelForLogin,
    LinkToForm,
    Question,
    ShowPasswordButton,
    TextValidation,
    Title,
} from '../Forms.styled';
import { IconCross, iconEyes } from '../../../images/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

const schema = object({
    email: string()
        .matches(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            'Enter a valid Email'
        )
        .required(),
    password: string().matches(/.{7,}/, 'Enter a valid password').required(),
}).required();

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordlValid] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const handleClickShow = () => setShow(!show);
    const deliveryDataUser = (email, password) => {
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
        console.log('you right');
        const { email, password } = data;
        deliveryDataUser(email, password);
        reset();
    };

    return (
        <Form>
            <form onSubmit={handleSubmit(deliveryData)}>
                <Title>Login</Title>
                <LabelForLogin>
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
                </LabelForLogin>
                <LabelForLogin login={true}>
                    <Input
                        {...register('password')}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        placeholder="Password"
                        type={show ? 'text' : 'password'}
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
                    <ShowPasswordButton type="button" onClick={handleClickShow}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForLogin>
                <ButtonSubmit type="submit" loginButtom={true}>
                    Login
                </ButtonSubmit>
                <Question>
                    Don't have an account?{' '}
                    {
                        <LinkToForm href="fwefew" to="/register">
                            Register
                        </LinkToForm>
                    }
                </Question>
            </form>
        </Form>
    );
}
