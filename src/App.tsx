import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={'HEADER'}/>
            <Body content={'BODY CONTENT'}/>
            <Footer title={'FOOTER'}/>
        </>
    )
}

export default App;
