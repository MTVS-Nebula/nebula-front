import axios from "axios";

export function LoginAPI(
  userName,
  password,
  setAuthErr,
  handleClose,
  navigate
) {
  const requestURL = "/auth/login";
  const infoURL = "/info";
  axios
    .post(requestURL, {
      username: userName,
      password: password,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.results.token);
      const token = localStorage.getItem("token");
      axios
        .get(infoURL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          localStorage.setItem("email", res.data.results.info.email);
          localStorage.setItem("username", res.data.results.info.username);
          localStorage.setItem("isLogged", true);
          handleClose();
          alert("로그인 되었습니다.");
          navigate("/");
        });
    })
    .catch((err) => {
      console.log("err! ", err);
      setAuthErr(true);
    });
}
