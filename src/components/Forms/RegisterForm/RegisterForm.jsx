import React, { useState } from 'react';
import {
    ButtonSubmit,
    Form,
    IconCrossValidate,
    IconOkey,
    InputForAuthorization,
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
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const schema = object({
    name: string()
        .required()
        .min(2, 'Name should be at least 2 characters')
        .max(16, 'Name should not exceed 16 characters')
        .matches(
             /^[a-zA-Z]{2,16}$/
,
            'Name should contain only letters and without spaces'
        ),
    email: string()
        .required()
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            'Enter a valid email address'
        ),
    password: string()
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
            'Password: 1 lowercase, 1 uppercase, 1 digit, 6-16 characters.'
        ),
}).required();


export default function RegisterForm() {
    const dispatch = useDispatch();
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordlValid] = useState(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordlValid] =
        useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const {
        register,
        handleSubmit,
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

    const deliveryDataUser = (name, email, password) => {
        dispatch(authOperations.register({name,email,password}))
        // .unwrap().then(originalPromiseResult => {
            // Notify.success(`${originalPromiseResult.user.name} welcome back!`);
        //   })
        //   .catch(() => {
            // Notify.failure('Incorrect login or password');
        //   });;

    };
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsNameValid(false);
        setIsEmailValid(false);
        setIsPasswordlValid(false);
        setIsConfirmPasswordlValid(false);
    }
    const deliveryData = data => {
        if (data.password !== confirmPassword) {
            setConfirmPasswordError("'Passwords do not match'")
            return;
        }
        const { name, email, password } = data;
        deliveryDataUser(name, email, password);
        reset();
    };

    return (
        <Form>
            <form onSubmit={handleSubmit(deliveryData)}>
                <Title>Registration</Title>
                <LabelForRegistration>
                    <InputForAuthorization
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder="Name"
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
                            const isValid =
                                 /^[a-zA-Z]{2,16}$/
.test(
                                    e.target.value
                                );
                            setIsNameValid(isValid);
                            setName(e.target.value);
                            if (isValid) {
                                errors.name = undefined;
                            }
                        }}
                    ></InputForAuthorization>
                    {isNameValid && !errors.name && (
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
                                    setName('');
                                }}
                                type="button"
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForRegistration>
                <LabelForRegistration>
                    <InputForAuthorization
                        {...register('email')}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder="Email"
                        type="email"
                        value={email}
                        style={{
                            border: errors.email
                                ? '1px solid var(--red)'
                                : isEmailValid && !errors.email
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
                                    e.target.value
                                );
                            setIsEmailValid(isValid);
                            setEmail(e.target.value);
                            if (isValid) {
                                errors.email = undefined;
                            }
                        }}
                    ></InputForAuthorization>
                    {isEmailValid && !errors.email && (
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
                                    setEmail('');
                                }}
                                type="button"
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForRegistration>

                <LabelForRegistration>
                    <InputForAuthorization
                        {...register('password')}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        placeholder="Password"
                        value={password}
                        title="Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long."
                        type={showOne ? 'text' : 'password'}
                        style={{
                            border: errors.password
                                ? '1px solid var(--red)'
                                : isPasswordValid && !errors.password
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e.target.value);
                            setIsPasswordlValid(isValid);
                            setPassword(e.target.value);
                            if (isValid) {
                                errors.password = undefined;
                            }
                        }}
                    ></InputForAuthorization>
                    {isPasswordValid && !errors.password && (
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
                                    setPassword('');
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
                        onClick={handleClickShowOne}
                    >
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForRegistration>
                <LabelForRegistration registration={true}>
                    <InputForAuthorization
                        {...register('confirmPassword')}
                        aria-invalid={confirmPasswordError ? 'true' : 'false'}
                        placeholder="Confirm password"
                        type={showTwo ? 'text' : 'password'}
                        value={confirmPassword}
                        title="Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long."
                        style={{
                            border: confirmPasswordError
                                ? '1px solid var(--red)'
                                : isConfirmPasswordValid &&
                                  !confirmPasswordError
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e.target.value);
                            setIsConfirmPasswordlValid(isValid);
                            if (isValid) {
                                setConfirmPasswordError("");
                            }
                            setConfirmPassword(e.target.value);
                        }}
                    ></InputForAuthorization>
                    {(isConfirmPasswordValid && !confirmPasswordError) && (
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
                    {confirmPasswordError && (
                        <>
                            <TextValidation>
                                {confirmPasswordError}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsConfirmPasswordlValid(false);
                                    setConfirmPassword('');
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
