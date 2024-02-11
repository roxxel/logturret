'use client'
import { Button, ButtonProps, CircularProgress, Spinner } from "@nextui-org/react";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";

interface IProps extends ButtonProps {};

const FormSubmitButton:FC<IProps> = (props) => {
    const {disabled, className, ...rest} = props
    const {pending} = useFormStatus()
    
    return (
        //TODO: Must be replaced with tlsx + twMerge later 
        <Button {...rest} className={className + " h-12"} color={pending ? 'default' : 'primary'} isDisabled={pending}>
            Continue
            {pending && <div><Spinner className="" size="sm" /></div> }
        </Button>
    )
};

export default FormSubmitButton;