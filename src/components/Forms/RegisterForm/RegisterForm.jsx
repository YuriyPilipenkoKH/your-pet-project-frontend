import React, { useState } from 'react';
import {
    ButtonSubmit,
    Form,
    Input,
    LabelForRegistration,
    LinkToForm,
    Question,
    ShowPasswordButton,
    TextValidation,
    Title,
} from '../Forms.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { iconEyes } from '../../../images/icons';
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
    confirmPassword: string().matches(/.{7,}/, 'Enter a valid password').required(),
}).required();

export default function RegisterForm() {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
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
    const handleClickOne = () => setShowOne(!showOne);
    const handleClickTwo = () => setShowTwo(!showTwo);
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
        console.log(321321)
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
                ></Input>
                {errors.name && <TextValidation> {errors.name.message} </TextValidation>}
                </LabelForRegistration>
                <LabelForRegistration>

                <Input
                    {...register('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    placeholder="Email"
                    type="email"
                ></Input>
                {errors.email && <TextValidation> {errors.email.message} </TextValidation>}
                </LabelForRegistration>

                <LabelForRegistration>
                    <Input
                        {...register('password')}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        inputInLabel={true}
                        placeholder="Password"
                        type={showOne ? 'text' : 'password'}
                    ></Input>
                    {errors.password && <TextValidation style={{ textAlign: "left" }}> {errors.password.message} </TextValidation>}
                    <ShowPasswordButton onClick={handleClickOne}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForRegistration>
                <LabelForRegistration registration={true}>
                    <Input
                        {...register('confirmPassword')}
                        aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                        inputInLabel={true}
                        placeholder="Confirm password"
                        onChange={console.log(321321)}
                        type={showTwo ? 'text' : 'password'}
                    ></Input>
                    {errors.confirmPassword && <TextValidation style={{ textAlign: "left" }}> {errors.confirmPassword.message} </TextValidation>}
                    <ShowPasswordButton onClick={handleClickTwo}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForRegistration>
                <ButtonSubmit type='submit'>Registration</ButtonSubmit>
                <Question>
                    Don't have an account?
                    {<LinkToForm href="fwefew" to="/login"> Login</LinkToForm>}
                </Question>
            </form>
        </Form>
    );
}
