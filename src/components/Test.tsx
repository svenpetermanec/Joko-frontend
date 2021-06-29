import { getPrice } from './../api/fetch.api'
import { useState, useEffect } from 'react'
import { Symbol } from './../types'
import { MainTable } from './MainTable'

interface Props{}

export const Test = (props: Props) => {

    const [symbols, setSymbols] = useState<Symbol[]>([]);

    useEffect(() =>{
        //need batcing to pass array
        getPrice('TSLA', 'SBUX').then((res) => setSymbols(res.data.price)).then(()=>console.log(symbols));
        // eslint-disable-next-line
    }, [getPrice]);

    return(
        <MainTable data = {symbols}></MainTable>
        //<span></span>
    )
}