import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const LoginModal = ({
  open,
  onClose,
  password,
  setPassword,
  onSubmit,
  userAttributes,
  otpVisible,
}) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Telefon numarası"
            type="number"
            fullWidth
            variant="standard"
            {...userAttributes}
          />
          {otpVisible && (
            <TextField
              margin="dense"
              id="password"
              label="Otp Şifresi"
              type="password"
              fullWidth
              variant="standard"
              value={password}
              onChange={setPassword}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit}>
            {otpVisible ? "Giriş Yap" : "Otp Gönder"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginModal;
