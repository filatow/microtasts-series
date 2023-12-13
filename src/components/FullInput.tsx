import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    onTextEnter: (newMessageText: string) => void
}

export const FullInput = ({onTextEnter}: FullInputPropsType) => {
    const [inputValue, setInputValue] = useState<string>('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    };
    const onClickButtonHandler = () => {
        onTextEnter(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <input
                type={'text'}
                onChange={onChangeInputHandler}
                value={inputValue}
            />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

