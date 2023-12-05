import React from "react";

type NewComponentPropsType = {
    currentBanknotes: Array<BanknoteType>
    onClickFilterHandler: (filterBy: filterOptionType) => void
}

 export type BanknoteType = {
    currency: string
    nominal: number
    number: string
}

export type filterOptionType = 'all' | 'dollar' | 'ruble'

export const NewComponent = ({currentBanknotes, onClickFilterHandler}: NewComponentPropsType) => {
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
    );
};