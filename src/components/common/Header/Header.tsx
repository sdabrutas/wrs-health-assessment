import { Box } from "@mui/material";
import { ColorModeSwitch } from "./styles";
import { useCustomColorScheme } from "../../../hooks";

const Header: React.FC = () => {
  const { mode, setMode } = useCustomColorScheme();

  return (
    <Box component="header" position="static" display="flex" justifyContent="space-between" py={2}>
      <Box />
      <ColorModeSwitch checked={mode === 'dark'} onChange={(event) =>  setMode(event.target.checked ? 'dark' : 'light')} />
    </Box>
  );
};

export default Header;
