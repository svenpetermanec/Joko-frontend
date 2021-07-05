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
        Header: 'Current',
        accessor: "c",
    },
    {
        Header: 'High',
        accessor: "h",
    },
    {
        Header: 'Low',
        accessor: "l",
    },
    {
        Header: 'Open',
        accessor: "o",
    },
    {
        Header: 'Previous close',
        accessor: "pc",
    },
    {
        Header: 'Time',
        accessor: "t",
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