import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "black",
        backgroundSize: "cover",
        zIndex: -2,
      }}
    >
      <video
        muted
        autoPlay
        loop
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <source src="img/backgroundVideo.mp4" type="video/mp4" />
        <strong>Your browser does not support the video tag.</strong>
      </video>
      <div style={{ height: "calc(100vh - 48px)" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontFamily: "KOFIHDrLEEJWTTF-B",
            zIndex: 2,
          }}
        >
          <div
            style={{
              color: "white",
              textShadow: "#000000 1px 0 10px",
              fontSize: 60,
              zIndex: 2,
            }}
            id="fadeText"
          >
            52헤르츠에서 유저들과 함께하세요
          </div>
          {localStorage.getItem("isLogged") ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginTop: 20, zIndex: 2 }}
              onClick={() => {
                window.open(
                  "https://mtvs-nebula.s3.ap-northeast-2.amazonaws.com/release/1123_build.Egg"
                );
              }}
              id="fadeText2"
            >
              게임 다운로드
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginTop: 20, zIndex: 2 }}
              onClick={() => {
                navigate("/signup");
              }}
              id="fadeText2"
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
