import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(`I'm ${subscriber}, ${age}`);
    }
    const Button1Foo = (subscriber: string) => {
        console.log(`I'm ${subscriber}`);
    }
    const Button3Foo = () => {
        console.log(`I'm stupid button`);
    }

    return (
        <div className='App'>
            <Button name={'Subscriber'} callBack={() => Button1Foo('Ivan')}/>
            <Button name={'Subscriber with age'} callBack={() => Button2Foo('Vasia', 21)}/>
            <Button name={'Stupid Button'} callBack={() => Button3Foo()}/>
        </div>
    )
}

export default App;
