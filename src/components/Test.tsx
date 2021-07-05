import { getPrice } from './../api'
import { useState, useEffect } from 'react'
import { Symbol } from './../types'
import { MainTable } from './MainTable'
import { TableButtonHolder } from './TableButtonHolder'
import { TickerModal } from './TickerModal'
import { Loader } from './Loader'

interface Props{}

export const Test = (props: Props) => {
    const [ symbols, setSymbols ] = useState<Symbol[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ modalOpener, setModalOpener ] = useState(false);

    async function fetchData(ticker: string){
        setIsLoading(true);
        await getPrice(ticker).then((res) => (setSymbols(res.data)));
        setIsLoading(false);
    }

    useEffect(() =>{
        fetchData('TSLA');
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <TableButtonHolder modalOpener={setModalOpener}/>
            {!isLoading && symbols.length !== 0 ? 
                <MainTable ata = {symbols}></MainTable>
                : <Loader/>
            }
            {modalOpener && (
                <TickerModal
                ModalOpen={modalOpener}
                setModalOpen={setModalOpener}
                ></TickerModal>
            )}
        </>
    )
}