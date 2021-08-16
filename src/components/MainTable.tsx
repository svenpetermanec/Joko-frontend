import { Column, useTable } from 'react-table';
import { useMemo } from 'react';
import { Table, Tbody, Thead, Tr, Th, Td } from '@chakra-ui/react';
import { Symbol } from './../types';

interface Props {
  symbols: Symbol[];
  rowsAreDeletable: boolean;
  setDeletionModalOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const MainTable = (props: Props) => {
  const { symbols, rowsAreDeletable, setDeletionModalOpen } = props;

  const data: any = symbols;
  
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
                { rowsAreDeletable && (
                  <Td onClick = {(e) => {
                    e.stopPropagation();
                    setDeletionModalOpen({
                      isOpen: true,
                      ticker: row.original,
                    })
                  }}
                  >
                    X
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
