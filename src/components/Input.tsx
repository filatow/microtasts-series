import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const Input = ({value, onChange}: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    }

    return (
        <input
            value={value}
            onChange={onChangeHandler}
        />
    );
};
