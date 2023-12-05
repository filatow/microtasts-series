import React, {useState} from 'react';
import './App.css';

function App() {
    // let a = 1
    const [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(a + 1);
        console.log(a);
    }
    const onClickHandler2 = () => {
        setA(0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}

export default App;
