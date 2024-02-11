import React, { FC } from "react";

interface IProps {};

const InternalServerError:FC<IProps> = (props) => {
    return (
        <div className="flex text-center justify-center items-center min-h-screen">
            <div>
                <h1 className="text-[24px] font-bold">500</h1>
                <p>Something went horribly wrong...</p>
                <p>Reload the page and try again</p>
            </div>
        </div>
    )
};

export default InternalServerError;