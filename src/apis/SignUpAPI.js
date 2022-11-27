import axios from "axios";

export function SignUpAPI(values, setSignUpErr, navigate) {
  const requestURL = "/auth/signup";

  axios
    .post(requestURL, {
      username: values.userName,
      password: values.password,
      email: values.email,
      verificationCode: values.code,
    })
    .then((res) => {
      console.log(res);
      alert("성공적으로 회원 가입이 되었습니다.\n 로그인 해 주세요");
      navigate("/");
    })
    .catch((err) => {
      console.log("err! ", err);
      setSignUpErr(true);
    });
}
