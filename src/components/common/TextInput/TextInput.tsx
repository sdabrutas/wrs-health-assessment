import { FormControl, TextField, TextFieldProps } from "@mui/material";

interface Props extends Omit<TextFieldProps, 'size' | 'variant'> {}

const TextInput: React.FC<Props> = (props) => (
  <FormControl>
    <TextField variant="outlined" size="small" {...props} />
  </FormControl>
);

export default TextInput;
