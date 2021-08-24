import { Column, useTable } from 'react-table';
import { useMemo } from 'react';
import { Table, Tbody, Thead, Tr, Th, Td } from '@chakra-ui/react';
import { Ticker } from './../types';

interface Props {
  tickers: Ticker[];
  rowsAreDeletable: boolean;
  setDeletionModalOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const MainTable = (props: Props) => {
  const { tickers, rowsAreDeletable, setDeletionModalOpen } = props;

  const data: any = tickers;

  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: 'Ticker',
        accessor: 'ticker',
      },
      {
        Header: 'qunatity',
        accessor: 'quantity',
      },
      {
        Header: 'Buy price',
        accessor: 'buyPrice',
      },
      {
        Header: 'Current price',
        accessor: 'price',
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
                <Th fontSize='15px' {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}

              {rowsAreDeletable && (
                <Th
                  position="sticky"
                  top={0}
                />
              )}
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
                    {/* TODO: icon */}
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
