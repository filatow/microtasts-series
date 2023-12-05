import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Cars} from "./site/Cars";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <Header title={'HEADER'}/>
            <Body content={'BODY CONTENT'}/>
            <Cars cars={topCars}/>
            <Footer title={'FOOTER'}/>
        </>
    )
}

export default App;
