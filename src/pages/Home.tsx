import { useEffect, useMemo, useState } from "react";
import { Box, Button, Container, IconButton, Skeleton, Typography } from "@mui/material";
import { useGetPosts } from "../data/posts";
import PostsTable from "../components/home/PostsTable";
import { Dropdown, Header } from "../components/common";
import SearchField from "../components/home/SearchField";
import { Close } from "@mui/icons-material";
import Snackbar from "../components/common/Snackbar/Snackbar";

// enum FilterField {
//   id = 'ID',
//   userId = 'User ID',
//   title = 'Title',
//   body = 'Body',
// }
type FilterField = 'id' | 'userId' | 'title' | 'body';
const filterFields: Record<FilterField, string> = {
  id: 'ID',
  userId: 'User ID',
  title: 'Title',
  body: 'Body',
};
const filterOptions = Object.keys(filterFields).map((key) => ({ value: key, label: filterFields[key as FilterField] }))

const Home: React.FC = () => {
  const { data, isError, isFetching, refetch } = useGetPosts();
  const [filterField, setFilterField] = useState<FilterField>('id');
  const [search, setSearch] = useState('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (data) {
      if (search) return data.filter((post) => `${post[filterField]}`.toLowerCase().includes(search.toLowerCase()));
      return data;
    }
    return [];
  }, [data, filterField, search]);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const snackbarAction = (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          handleSnackbarClose();
          refetch();
        }}
      >
        Retry
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    if (isError) {
      setIsSnackbarOpen(true);
    }
  }, [isError]);

  if (isFetching) {
    return (
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
        <Skeleton variant="rectangular" width="100%" height="90vh" />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* <Header /> */}
      <Box display="flex" alignItems="center" mb={2} gap={2} sx={(theme) => ({ [theme.breakpoints.down('md')]: { flexDirection: 'column', '& > div': { width: '100%' } } })}>
        <Box textAlign="center">
          <Typography variant="body1">Search by</Typography>
        </Box>
        <Box minWidth={150}>
          <Dropdown
            options={filterOptions}
            multiple={false}
            native={false}
            value={filterField}
            onChange={(event) => {
              setFilterField(event.target.value as FilterField);
              setSearch('');
            }}
            autoWidth={false}
          />
        </Box>
        <Box minWidth={150}>
          <SearchField value={search} onChange={setSearch} />
        </Box>
      </Box>
      <PostsTable data={filteredData} />
      <Snackbar variant="error" open={isSnackbarOpen} onClose={handleSnackbarClose} message="Unable to fetch data" action={snackbarAction} />
    </Container>
  );
};

export default Home;
