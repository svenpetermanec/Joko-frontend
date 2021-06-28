import { getPrice } from './../api/fetch.api'
import { Button } from '@chakra-ui/react'

interface Props{}

export const Test = (props: Props) => {

    async function handle() {
        const { data } = await getPrice('TSLA');
        console.log(data.price);
      }
    return(
        <Button onClick={handle}></Button>
    )
}