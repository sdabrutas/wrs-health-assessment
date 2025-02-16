import { Container, styled } from "@mui/material";
import { useGetPosts } from "../data/posts";
import PostsTable from "../components/home/PostsTable";
import Header from "../components/common/Header";

const StyledContainer = styled(Container)(({ theme }) => ({
  ...theme.applyStyles('dark', {
    backgroundColor: '#8796A5',
  }),
}));

const Home: React.FC = () => {
  const { data } = useGetPosts();

  return (
    <StyledContainer maxWidth="lg">
      <Header />
      {data && <PostsTable data={data} />}
    </StyledContainer>
  );
};

export default Home;
