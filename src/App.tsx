import React, {useState} from 'react';
import './App.css';
import {BanknoteType, filterOptionType, NewComponent} from "./NewComponent";


function App() {
    const [money] = useState([
        {currency: 'dollar', nominal: 100, number: ' a1234567890'},
        {currency: 'dollar', nominal: 50, number: ' z1234567890'},
        {currency: 'ruble', nominal: 100, number: ' w1234567890'},
        {currency: 'dollar', nominal: 100, number: ' e1234567890'},
        {currency: 'dollar', nominal: 50, number: ' c1234567890'},
        {currency: 'ruble', nominal: 100, number: ' r1234567890'},
        {currency: 'dollar', nominal: 50, number: ' x1234567890'},
        {currency: 'ruble', nominal: 50, number: ' v1234567890'},
    ]);
    const [filterOption, setFilterOption] = useState<filterOptionType>('all');
    let currentMoney: Array<BanknoteType> = [...money];
    if (filterOption === 'ruble') {
        currentMoney = money.filter((banknote: BanknoteType) => banknote.currency === 'ruble');
    } else if (filterOption === 'dollar') {
        currentMoney = money.filter((banknote: BanknoteType) => banknote.currency === 'dollar');
    }
    const onClickHandler = (filterBy: filterOptionType) => setFilterOption(filterBy);


    return (
        <>
            <NewComponent
                currentBanknotes={currentMoney}
                onClickFilterHandler={onClickHandler}
            />
        </>
    )
}

export default App;
