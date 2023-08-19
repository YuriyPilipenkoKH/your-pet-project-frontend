import React, { useState } from 'react';
import {
    ButtonSubmit,
    Form,
    Input,
    LabelForLogin,
    Question,
    ShowPasswordButton,
    TextValidation,
    Title,
} from '../Forms.styled';
import { iconEyes } from '../../../images/icons';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
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

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
    const handleClick = () => setShow(!show);
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
        console.log("you right");
        setIsSubmitted(true);
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
                                : isSubmitted
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                    ></Input>
                    {errors.email && (
                        <TextValidation>{errors.email.message}</TextValidation>
                    )}
                </LabelForLogin>
                <LabelForLogin login={true}>
                    <Input
                        {...register('password')}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        inputInLabel={true}
                        placeholder="Password"
                        type={show ? 'text' : 'password'}
                        style={{
                            border: errors.password
                                ? '1px solid var(--red)'
                                : isSubmitted
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                    ></Input>
                    {errors.password && (
                        <TextValidation style={{ textAlign: 'left' }}>
                            {errors.password.message}
                        </TextValidation>
                    )}
                    <ShowPasswordButton onClick={handleClick}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForLogin>
                <ButtonSubmit loginButtom={true}>Login</ButtonSubmit>
                <Question>
                    Don't have an account?
                    {
                        <Link href="fwefew" to="/register">
                            Register
                        </Link>
                    }
                </Question>
            </form>
        </Form>
    );
}
