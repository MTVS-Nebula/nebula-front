import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Divider, Alert, AlertTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../apis/LoginAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal(props) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAuthErr(false);
    setValues({ username: "", password: "" });
  };

  const [authErr, setAuthErr] = React.useState(false);

  const [values, setValues] = React.useState({
    username: "",
    amount: "",
    password: "",
    checkUsername: false,
    checkEmail: false,
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickLoginButton = () => {
    LoginAPI(
      values.username,
      values.password,
      setAuthErr,
      handleClose,
      navigate
    );
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            로그인
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />
          <Stack spacing={2}>
            <TextField
              id="outlined-basic-id"
              label="username"
              variant="outlined"
              value={values.username}
              onChange={handleChange("username")}
            />
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
          <div
            style={{ textAlign: "right", marginTop: 15, marginBottom: 15 }}
            onClick={handleClickLoginButton}
          >
            <Button
              variant="contained"
              style={{ color: "white", background: "black" }}
            >
              login
            </Button>
          </div>
          {authErr ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              아이디 혹은 비밀번호가 틀렸습니다! —{" "}
              <strong>check it out!</strong>
            </Alert>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
