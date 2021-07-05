import { useTable } from 'react-table'
import { useMemo } from 'react'
import { Table, Tbody, Thead, Tr, Th, Td} from '@chakra-ui/react';

interface Props{
   ata: any,
}

export const MainTable = (props: Props) => {

const { ata } = props;
 
const data = useMemo(() => [ata], [ata]);

const columns = useMemo(
    () => [
    {
        Header: 'Price',
        accessor: "c", // accessor is the "key" in the data
    },
    {
        Header: 'Price',
        accessor: "h", // accessor is the "key" in the data
    },
    {
        Header: 'Price',
        accessor: "l", // accessor is the "key" in the data
    },
    {
        Header: 'Price',
        accessor: "o", // accessor is the "key" in the data
    },
    {
        Header: 'Price',
        accessor: "pc", // accessor is the "key" in the data
    },
    {
        Header: 'Price',
        accessor: "t", // accessor is the "key" in the data
    },
    ],
    []
);

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
} = useTable({ columns, data });

return (
    <div>
        <Table {...getTableProps()}>
        <Thead bgColor="#363945">
            {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <Th
                    {...column.getHeaderProps()}
                >
                    {column.render('Header')}
                </Th>
                ))}
            </Tr>
            ))}
        </Thead>
        <Tbody bgColor="#363945" color="white" {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                    <Td
                        {...cell.getCellProps()}
                    >
                        {cell.render('Cell')}
                    </Td>
                    )
                })}
                </Tr>
            )
            })}
        </Tbody>
        </Table>
    </div>
    //<span></span>
)
}