import { Stack, Box, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page:number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)]
  .map((_,index) => from + index+ 1)
  .filter(page => page > 0);
}

export function Pagination ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages = currentPage > 1 
  ? generatePagesArray(currentPage - siblingsCount - 1, currentPage - 1)
  : [];

  const nextPages = currentPage > 1 
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : [2];
  console.log(nextPages)

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>{((currentPage - 1) * registerPerPage) + 1}</strong> - <strong>{(currentPage * registerPerPage)}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && (
            <Text 
              color="gray.300"
              width="8"  
              textAlign="center"
            >...</Text>)}
          </>
        )}

        {previousPages && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage  && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
            <Text 
              color="gray.300"
              width="8"  
              textAlign="center"
            >...</Text>)}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}
