'use client'
import { NextUIProvider } from "@nextui-org/react";
import React, { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {};

const Providers:FC<IProps> = ({children}) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
};

export default Providers;