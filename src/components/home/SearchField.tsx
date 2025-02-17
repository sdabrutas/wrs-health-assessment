import { useDeferredValue, useEffect, useState } from "react";
import { Box, FormControl, InputAdornment } from "@mui/material";

import { TextInput } from "../common";
import { Search } from "@mui/icons-material";

interface Props {
  value: string;
  onChange(value: string): void;
}

const SearchField: React.FC<Props> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const deferredValue = useDeferredValue(inputValue);

  useEffect(() => {
    onChange(deferredValue);
  }, [deferredValue]);

  return (
    <FormControl size="small" sx={{ width: '100%' }}>
      <TextInput
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          },
        }}
      />
    </FormControl>
  );
};

export default SearchField;
