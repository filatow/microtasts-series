import React, {useState} from 'react';
import './App.css';
// import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';

type MessageType = {
    message: string
}

function App() {
    const [messages, setMessages] = useState<Array<MessageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);
    const [inputValue, setInputValue] = useState<string>('');

    const addMessage = (newMessageText: string) => {
        const newMessage: MessageType = {message: newMessageText};
        setMessages([newMessage, ...messages])
    }
    const addNewMessage = () => {
        addMessage(inputValue);
        setInputValue('');
    }

    return (
        <div className="App">
            {/*<FullInput onTextEnter={addMessage}/>*/}

            <Input value={inputValue} onChange={setInputValue}/>
            <Button caption={'+'} onClick={addNewMessage} />

            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
