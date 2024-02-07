"use client";

import React, { FunctionComponent } from "react";

type Props = {
    title: string
    description: string
    Icon: React.ComponentType<{ fontSize: 'large'}>
}

export const FeatureBlock: FunctionComponent<Props> = ({ title, description, Icon }) => {
    return (
        <article className="flex flex-col items-center gap-3 text-center">
            <Icon fontSize='large'/>
            <h4 className="text-2xl font-semibold text-balance">{title}</h4>
            <p className="text-lg text-pretty">
                {description}
            </p>
        </article>
    )
}
