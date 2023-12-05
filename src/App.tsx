import React, {useState} from 'react';
import './App.css';

type BanknoteType = {
    currency: string
    nominal: number
    number: string
}

type filterOptionType = 'all' | 'dollar' | 'ruble'

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
    let currentBanknotes: Array<BanknoteType> = [...money];
    if (filterOption === 'ruble') {
        currentBanknotes = money.filter((banknote: BanknoteType) => banknote.currency === 'ruble');
    } else if (filterOption === 'dollar') {
        currentBanknotes = money.filter((banknote: BanknoteType) => banknote.currency === 'dollar');
    }
    const onClickFilterHandler = (filterBy: filterOptionType) => setFilterOption(filterBy);

    const banknotesListItemElements = currentBanknotes.map((item: BanknoteType) => {
        return (
            <li key={item.number}>
                <span> {item.currency}</span>
                <span> {item.nominal}</span>
                <span> {item.number}</span>
            </li>
        )
    });

    return (
        <>
            <ul>
                {banknotesListItemElements}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>
    )
}

export default App;
