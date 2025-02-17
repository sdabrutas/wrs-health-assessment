import { useColorScheme } from "@mui/material";

export const useCustomColorScheme = () => {
  const { mode, systemMode, ...rest } = useColorScheme();
  const actualMode = mode === 'system' ? systemMode : mode;
  return { mode: actualMode, ...rest };
};
