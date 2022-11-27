import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Alert, AlertTitle } from "@mui/material";
// import { SignUpAPI } from "../apis/SignUpAPI";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import { CheckUsernameDuplicationAPI } from "../apis/CheckUsernameDuplicationAPI";
import { CheckEmailDuplicationAPI } from "../apis/CheckEmailDuplicationAPI";
import { SignUpAPI } from "../apis/SignUpAPI";
import { SendEmailAPI } from "../apis/SendEmailAPI";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Published by © "}
      정성은 / 김대연 {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();

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

  const handleClickUsernameCheck = () => {
    CheckUsernameDuplicationAPI(values.userName, setUsernameDuplication);
  };

  const handleClickEmailCheck = () => {
    CheckEmailDuplicationAPI(values.email, setEmailDuplication);
  };

  const handleClickSendEmail = () => {
    SendEmailAPI(values, setSendCode, setCodeErr);
  };

  const [values, setValues] = React.useState({
    userName: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    email: "",
    code: "",
    showPassword: false,
  });

  const [signUpErr, setSignUpErr] = React.useState(false);
  const [usernameDuplication, setUsernameDuplication] = React.useState(false);
  const [emailDuplication, setEmailDuplication] = React.useState(false);
  const [sendCode, setSendCode] = React.useState(false);
  const [codeErr, setCodeErr] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const onClickHandler = () => {
    SignUpAPI(values, setSignUpErr, navigate);
  };

  return (
    <div
      style={{
        background: "url(/img/background.jpeg)",
        backgroundSize: "cover",
        height: "calc(100vh - 48px)",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{
              fontFamily: "KOFIHDrLEEJWTTF-B",
              textShadow: "#000000 1px 0 10px",
            }}
            color="white"
          >
            회원 가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  value={values.userName}
                  onChange={handleChange("userName")}
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="아이디"
                  autoFocus
                  style={{ background: "white", borderRadius: 5 }}
                  disabled={usernameDuplication}
                />
              </Grid>
              <Grid item xs={3}>
                {!usernameDuplication && values.userName ? (
                  <Button
                    variant="contained"
                    onClick={handleClickUsernameCheck}
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      height: "100%",
                    }}
                  >
                    중복 확인
                  </Button>
                ) : (
                  <Button
                    variant="disabled"
                    onClick={handleClickUsernameCheck}
                    style={{
                      color: "white",
                      backgroundColor: "gray",
                      height: "100%",
                    }}
                  >
                    중복 확인
                  </Button>
                )}
              </Grid>
              <Grid item xs={9}>
                <TextField
                  value={values.email}
                  onChange={handleChange("email")}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  style={{ background: "white", borderRadius: 5 }}
                  disabled={emailDuplication}
                />
              </Grid>
              <Grid item xs={3}>
                {!emailDuplication && values.email ? (
                  <Button
                    variant="contained"
                    onClick={handleClickEmailCheck}
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      height: "100%",
                    }}
                  >
                    중복 확인
                  </Button>
                ) : (
                  <Button
                    variant="disabled"
                    onClick={handleClickEmailCheck}
                    style={{
                      color: "white",
                      backgroundColor: "gray",
                      height: "100%",
                    }}
                  >
                    중복 확인
                  </Button>
                )}
              </Grid>
              {emailDuplication ? (
                <>
                  <Grid item xs={9}>
                    <TextField
                      value={values.code}
                      onChange={handleChange("code")}
                      required
                      fullWidth
                      id="code"
                      label="인증 번호를 입력하세요"
                      name="code"
                      autoComplete="code"
                      style={{ background: "white", borderRadius: 5 }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    {!sendCode ? (
                      <Button
                        variant="contained"
                        onClick={handleClickSendEmail}
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          height: "100%",
                        }}
                      >
                        인증코드
                      </Button>
                    ) : (
                      <Button
                        variant="disabled"
                        onClick={handleClickSendEmail}
                        style={{
                          color: "white",
                          backgroundColor: "gray",
                          height: "100%",
                        }}
                      >
                        인증코드
                      </Button>
                    )}
                  </Grid>
                </>
              ) : null}
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  style={{
                    width: "100%",
                    background: "white",
                    borderRadius: 5,
                  }}
                >
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickHandler}
              style={
                emailDuplication &&
                usernameDuplication &&
                values.password &&
                values.code
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "white", backgroundColor: "gray" }
              }
              disabled={
                !(
                  emailDuplication &&
                  usernameDuplication &&
                  values.password &&
                  values.code
                )
              }
            >
              회원 가입하기
            </Button>
            {signUpErr ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                회원 가입에 실패했습니다. —{" "}
                <strong>ID/EMAIL을 제대로 입력하셨습니까?</strong>
              </Alert>
            ) : null}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LoginModal>
                  <Link style={{ color: "white" }}>
                    계정이 있으신가요? 로그인하세요!
                  </Link>
                </LoginModal>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  );
}
