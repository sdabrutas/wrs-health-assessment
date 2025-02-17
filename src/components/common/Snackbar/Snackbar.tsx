import { Alert, AlertProps, Snackbar as MuiSnackbar, SnackbarCloseReason, SnackbarProps } from "@mui/material";

interface Props extends SnackbarProps {
  variant: AlertProps['severity'];
  onClose(): void;
  message: string;
}

const Snackbar: React.FC<Props> = ({ variant, open, onClose, message, ...rest }) => {
  const handleClose = (_: any, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <MuiSnackbar open={open} onClose={handleClose} {...rest}>
      <Alert
        onClose={handleClose}
        severity={variant}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
