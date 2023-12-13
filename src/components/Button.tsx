import React from 'react';

type ButtonPropsTyp = {
    caption: string
    onClick: () => void
}

export const Button = ({caption, onClick}: ButtonPropsTyp) => {
    const onButtonClickHandler = () => onClick();

    return (
        <button onClick={onButtonClickHandler}>{caption}</button>
    );
};