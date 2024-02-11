'use client'
import LoginForm from "@/components/ui/loginform";
import React, { FC } from "react";

interface IProps {};

const LoginPage:FC<IProps> = (props) => {
    return (
        <div className="flex min-h-screen max-md:flex-col justify-center items-center">
            <div className="lg:w-1/4 max-md:mb-8 max-md:text-center">
                <h1 className="font-bold text-[54px]">LogTurret</h1>
                <p className="text-[20px] font-thin">Home for your logs</p>
            </div>
            <div className="lg:w-1/4 lg:px-0 md:max-w-[400px] w-full px-8">
                <LoginForm />
            </div>
        </div>
    )
};

export default LoginPage;