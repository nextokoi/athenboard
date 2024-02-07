'use client'

import React, { Children, FunctionComponent, ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const HorizontalScroll: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="overflow-x-scroll whitespace-nowrap" style={{scrollbarWidth: 'none'}}>
            <div className="inline-flex space-x-4 p-4">
                {Children.map(children, (child, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}