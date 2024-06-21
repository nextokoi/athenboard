'use client'
import { Button } from "keep-react";
import React, { FunctionComponent } from "react";

type Props = {
    title: string
    bgColor: string
    width?: string
}

export const ButtonComponent: FunctionComponent<Props> = ({title, bgColor, width}) => {
    return(
        <Button className={`bg-[${bgColor}] px-3 py-2 rounded-md text-white w-${width} hover:bg-[${bgColor}]`}>
            {title}
        </Button>
    )
}