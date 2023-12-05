import React from 'react'

type BodyPropsType = {
    content: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <div>{props.content}</div>
    )
}