import { Box, useColorScheme } from "@mui/material";
import { ColorModeSwitch } from "./styles";

const Header: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Box component="header" position="static" display="flex" justifyContent="space-between" py={2}>
      <Box />
      <ColorModeSwitch checked={mode === 'dark'} onChange={(event) =>  setMode(event.target.checked ? 'dark' : 'light')} />
    </Box>
  );
};

export default Header;
