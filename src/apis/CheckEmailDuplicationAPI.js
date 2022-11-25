import axios from "axios";

export function CheckEmailDuplicationAPI(email, setDupCheck) {
  const requestURL = "/duplication/email";
  axios
    .post(requestURL, {
      email: email,
    })
    .then((res) => {
      console.log(res);
      setDupCheck(true);
      alert("사용하실 수 있는 이메일 입니다.");
    })
    .catch((err) => {
      console.log("err! ", err);
      alert("이메일이 중복되었거나 형식에 맞지 않습니다.");
    });
}
