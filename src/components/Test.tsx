import { getPrice } from './../api/fetch.api'
import { useState, useEffect } from 'react'
import { Symbol } from './../types'
import { MainTable } from './MainTable'
import { Loader } from './Loader'

interface Props{}

export const Test = (props: Props) => {

    //const [symbols, setSymbols] = useState<Symbol[]>([]);
    const [symbols, setSymbols] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    async function fetchData(ticker: string){
        setIsLoading(true);
        await getPrice(ticker).then((res) => (setSymbols(res.data)));
        setIsLoading(false);
    }

    useEffect(() =>{
        //need batcing to pass array
        //getPrice('SBUX').then((res) => (setSymbols(res.data), console.log(symbols)));
        fetchData('TSLA');
        // eslint-disable-next-line
    }, []);

    return(
        <span>
            {!isLoading && symbols.length != 0 ? 
            <MainTable ata = {symbols}></MainTable>
            //<p></p>
            : //<p></p>
            <Loader position="relative"/>
        }
        </span>
    )
}