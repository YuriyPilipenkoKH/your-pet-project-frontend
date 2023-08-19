import React, { useState } from "react";
import {
    ButtonSubmit,
    Form,
    Input,
    LabelForLogin,
    LinkToForm,
    Question,
    ShowPasswordButton,
    Title,
} from "../Forms.styled";
import { iconEyes } from '../../../images/icons'
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const inputInLabel={
        inputInLabel: true,
    }

    return (
        <Form>
            <form>
                <Title>Login</Title>
                <Input placeholder="Email" type="email"></Input>
                <LabelForLogin login={true}>
                    <Input
                        {...inputInLabel}
                        type={show ? 'text' : 'password'}
                        placeholder="Password"
                    ></Input>
                    <ShowPasswordButton onClick={handleClick}>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForLogin>
                <ButtonSubmit loginButtom={true}>Login</ButtonSubmit>
                <Question>
                    Don't have an account?
                    {<Link href="fwefew"> Register</Link>}
                </Question>
            </form>
        </Form>
    );
}
