'use client'
import React, { FC } from "react";
import {Card, CardHeader, CardBody, CardFooter, Input, Button, Divider, Link} from "@nextui-org/react";
import FormSubmitButton from "../formsubmitbutton";
import { useFormState } from "react-dom";
import { signInAction } from "@/app/login/login.actions";
import InternalServerError from "./internalservererror";

interface IProps {};

const LoginForm:FC<IProps> = (props) => {
    const [state, action] = useFormState(signInAction, [])
    if (!state) {
        return <InternalServerError />
    } 
    return (
       <Card>
            <CardHeader>
                <p className="text-[28px] font-medium">Sign in</p>
            </CardHeader>
            <CardBody>
                <form action={action} className="space-y-4">
                    <Input name="email" label="E-Mail"></Input>
                    <Input name="password" label="Password" type="password" />
                    <FormSubmitButton className="w-full" type="submit" color="primary" />
                </form>
                <Divider className="my-4" />
                <div className="flex">
                    <p className="inline w-fit">Don&apos;t have an account?</p>
                    <Link className="inline-block ml-1" href="/register">Create one</Link>
                </div>
            </CardBody>
       </Card>
    )
};

export default LoginForm;