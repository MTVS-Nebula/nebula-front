import axios from "axios";

export function SendEmailAPI(values, setSendCode, setCodeErr) {
  const requestURL = "/verification/email/" + values.email;

  axios
    .post(requestURL, {})
    .then((res) => {
      console.log(res);
      alert("인증메일을 전송했습니다. 메일함을 확인해주세요");
      setSendCode(true);
    })
    .catch((err) => {
      console.log("err! ", err);
      alert(
        "AWS SES sandbox 설정으로 인해 인증코드 전송이 어려운 이메일 입니다.\n 관리자에게 문의해 주세요"
      );
      setCodeErr(true);
    });
}
