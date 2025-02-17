import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    
    // ...theme.applyStyles('dark', {
    //   backgroundColor: theme.palette.primary.dark,
    //   color: theme.palette.common.white,
    // }),
  }
}));

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
