import axios from "axios";

export function CheckUsernameDuplicationAPI(username, setDupCheck) {
  const requestURL = "/duplication/username";
  axios
    .post(requestURL, {
      username: username,
    })
    .then((res) => {
      console.log(res);
      setDupCheck(true);
      alert("사용하실 수 있는 아이디 입니다.");
    })
    .catch((err) => {
      console.log("err! ", err);
      alert("아이디가 중복되었습니다.");
    });
}
