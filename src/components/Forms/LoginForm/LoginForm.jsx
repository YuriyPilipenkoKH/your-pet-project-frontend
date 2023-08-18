import React from "react";
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

export default function LoginForm() {
    return (
        <Form>
            <form>
                <Title>Login</Title>
                <Input placeholder="Email" type="email"></Input>
                <LabelForLogin login>
                    <Input
                        inputInLabel
                        placeholder="Password"
                        type="password"
                    ></Input>
                    <ShowPasswordButton>
                        {iconEyes}
                    </ShowPasswordButton>
                </LabelForLogin>
                <ButtonSubmit loginButtom>Login</ButtonSubmit>
                <Question>
                    Don't have an account?
                    {<LinkToForm href="fwefew"> Register</LinkToForm>}
                </Question>
            </form>
        </Form>
    );
}
