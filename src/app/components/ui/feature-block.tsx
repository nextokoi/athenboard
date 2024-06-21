"use server";

import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";

type Props = {
    title: string
    description: string
    Icon: IconType
}

export const FeatureBlock: FunctionComponent<Props> = ({ title, description, Icon }) => {
    return (
        <article className="flex flex-col items-center gap-3 text-center w-fit">
            <Icon className='text-3xl'/>
            <h4 className="text-2xl font-semibold text-balance">{title}</h4>
            <p className="text-lg text-pretty xl:w-96">
                {description}
            </p>
        </article>
    )
}
