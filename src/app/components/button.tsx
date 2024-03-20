'use client'

import React, { FunctionComponent } from "react";

type Props = {
    title: string
    bgColor: string
    width?: string
}

export const Button: FunctionComponent<Props> = ({title, bgColor, width}) => {
    return(
        <button type="button" className={`bg-[${bgColor}] px-3 py-2 rounded-md text-white ${width}`}>
            {title}
        </button>
    )
}