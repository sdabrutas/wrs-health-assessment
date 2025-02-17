import { useMemo, useState } from "react";
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { Post } from "../../data/posts/types";
import { StyledTableCell, StyledTableRow } from "./styles";

interface Props {
  data: Post[];
}

const PostsTable: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const tableRows = useMemo(() => {
    if (data.length === 0 ) {
      return (
        <TableRow>
          <StyledTableCell colSpan={4} sx={{ textAlign: 'center' }}>No data available</StyledTableCell>
        </TableRow>
      );
    }

    return data
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
      .map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell component="th" scope="row">
            {row.id}
          </StyledTableCell>
          <StyledTableCell>{row.userId}</StyledTableCell>
          <StyledTableCell>{row.title}</StyledTableCell>
          <StyledTableCell>{row.body}</StyledTableCell>
        </StyledTableRow>
      ));
  }, [data, page, rowsPerPage]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Body</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        }}
        onPageChange={(_, newPage) => setPage(newPage)}
      />
    </TableContainer>
  );
};

export default PostsTable;
