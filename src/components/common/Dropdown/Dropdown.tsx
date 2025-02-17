import { FormControl, MenuItem, Select } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

interface Props extends SelectInputProps {
  options: Array<{ value: string; label: string }>
}

const Dropdown: React.FC<Props> = ({ options, ...rest }) => (
  <FormControl size="small" sx={{ width: '100%' }}>
    <Select {...rest}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
      ))}
    </Select>
  </FormControl> 
);

export default Dropdown;
