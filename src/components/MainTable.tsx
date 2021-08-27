import { Column, useTable } from 'react-table';
import { useMemo } from 'react';
import { Table, Tbody, Thead, Tr, Th, Td, Button } from '@chakra-ui/react';
import { TickerProfit } from '../types';

interface Props {
  tickers: TickerProfit[];
  headers: Column[];
  rowsAreDeletable: boolean;
  setDeletionModalOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const MainTable = (props: Props) => {
  const { tickers, headers, rowsAreDeletable, setDeletionModalOpen } = props;

  const data: any = tickers;

  const columns: Array<Column> = useMemo(() => headers, [headers]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th
                  position='sticky'
                  top={0}
                  textAlign='center'
                  fontSize='15px'
                  bg='#2cd1a2'
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </Th>
              ))}

              {rowsAreDeletable && (
                <Th bg='#2cd1a2' position='sticky' top={0} />
              )}
            </Tr>
          ))}
        </Thead>

        <Tbody bg='#363945' color='white' {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td textAlign='center' {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
                {rowsAreDeletable && (
                  <Td
                    onClick={e => {
                      e.stopPropagation();
                      setDeletionModalOpen({
                        isOpen: true,
                        ticker: row.original,
                      });
                    }}
                  >
                    <Button bg='none' color='#db504a'>
                      X
                    </Button>
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
