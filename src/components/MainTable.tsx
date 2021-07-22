import { Column, useTable } from 'react-table';
import { useMemo } from 'react';
import { Table, Tbody, Thead, Tr, Th, Td } from '@chakra-ui/react';
import { Symbol } from './../types';

interface Props {
  symbols: Symbol[];
}

export const MainTable = (props: Props) => {
  const { symbols } = props;

  const data: Array<any> = useMemo(() => [symbols], [symbols]);

  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: 'Current',
        accessor: 'c',
      },
      {
        Header: 'High',
        accessor: 'h',
      },
      {
        Header: 'Low',
        accessor: 'l',
      },
      {
        Header: 'Open',
        accessor: 'o',
      },
      {
        Header: 'Previous close',
        accessor: 'pc',
      },
      {
        Header: 'Time',
        accessor: 't',
      },
    ],
    []
  );
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Table {...getTableProps()}>
        <Thead bgColor='#363945'>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody bgColor='#363945' color='white' {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
