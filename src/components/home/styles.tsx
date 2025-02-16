import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export const StyledTableCell = styled(TableCell)(({ theme }) => `
  &.${tableCellClasses.head} {
    background-color: ${theme.palette.primary.main};
  }
`);

export const StyledTableRow = styled(TableRow)`
  background-color: ${lightGreen[50]};
  &:nth-of-type(odd) {
    background-color: ${lightGreen[100]};
  }

  /* hide last border */
  &:last-child td, &:last-child th {
    border: 0;
  }
`;
