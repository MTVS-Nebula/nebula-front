import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "url(/img/background.jpeg)",
        backgroundSize: "cover",
      }}
    >
      <div style={{ height: "calc(100vh - 48px)" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontFamily: "KOFIHDrLEEJWTTF-B",
          }}
        >
          <div
            style={{
              color: "white",
              textShadow: "#000000 1px 0 10px",
              fontSize: 60,
            }}
          >
            52헤르츠에서 유저들과 함께하세요
          </div>
          {localStorage.getItem("isLogged") ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginTop: 20 }}
              onClick={() => {
                window.open(
                  "https://mtvs-nebula.s3.ap-northeast-2.amazonaws.com/release/1123_build.Egg"
                );
              }}
            >
              게임 다운로드
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginTop: 20 }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              지금 회원 가입하기
            </Button>
          )}
        </div>
      </div>
      {/* <img
        src="img/52hertz.png"
        style={{
          margin: "auto",
          display: "block",
          height: "50vw",
        }}
      /> */}
    </div>
  );
}
