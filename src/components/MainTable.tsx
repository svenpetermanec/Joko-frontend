import { useTable } from 'react-table'
import { useMemo } from 'react'
import { Table, Tbody, Thead, Tr, Th, Td} from '@chakra-ui/react';

interface Props{}

export const MainTable = (props: Props) => {
const data = useMemo(
    () => [
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'test' ,
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'test' ,
    },
    {
        col1: 'whatever',
        col2: 'you want',
        col3: 'test' ,
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'test' ,
    },
    ],
    []
)

const columns = useMemo(
    () => [
    {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
    },
    {
        Header: 'Column 2',
        accessor: 'col2',
    },
    {
        Header: 'Column 3',
        accessor: 'col3', // accessor is the "key" in the data
    },
    ],
    []
)

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
} = useTable({ columns, data })

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
    <Tbody {...getTableBodyProps()}>
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
)
}