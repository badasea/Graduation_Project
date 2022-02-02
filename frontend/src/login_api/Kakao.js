import React from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import axios from "axios";

const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

const buttonBlock = {
  border: "none",
  borderRadius: "12px",
  fontSize: "20px",
  width: "100%",
  fontWeight: "500",
  height: "60px",
  cursor: "pointer",
  background: "#FEE500",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  collapse: "collapse",
};

function LoginKaKao() {
  function login(response) {
    //console.log(response);
    let data = {
      user_email: response.profile.kakao_account.email,
      user_name: response.profile.kakao_account.profile.nickname,
    };

    axios.post("/api/user", data).then(function (res) {
      console.log(res.data);
    });
    var url = "/api/user/login/" + data.user_email;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setCookie("cookie", response.data[0].user_name, 1);

        document.location.href = "/";

        // console.log(response.data[0].user_email);
        // console.log(data.user_email);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }
  return (
    <div>
      <KaKaoLogin
        token={KAKAO_KEY}
        onSuccess={login}
        onFail={console.error}
        onLogout={console.info}
        style={buttonBlock}
      >
        <div style={{ color: "black" }}>카카오 로그인</div>
      </KaKaoLogin>
    </div>
  );
}
// class LoginKaKao extends Component {
//   render() {
//     function login(response) {
//       console.log(response);

//       axios
//         .get("/api/user")
//         .then(function (response) {
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           //console.log("실패");
//         });

//       let data = JSON.stringify({
//         user_email: response.profile.kakao_account.email,
//         user_name: response.profile.kakao_account.profile.nickname,
//       });

//       // axios
//       //   .post("/api/user", data, {
//       //     headers: {
//       //       "Content-type": "application/json; charset=utf-8",
//       //     },
//       //   })
//       //   .then((res) => {
//       //     if (res.data.email === undefined) {
//       //       alert("회원가입 완료");
//       //     } else {
//       //       //alert("회원가입이 완료되었습니다.");
//       //     }
//       //   })
//       //   .catch((error) => {
//       //     console.log(error.response);
//       //   });
//     }

//     return (
//       <div>
//         <KaKaoLogin
//           token={KAKAO_KEY}
//           buttonText="kakao"
//           onSuccess={login}
//           onFail={console.error}
//           onLogout={console.info}
//           style={buttonBlock}
//         >
//           <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
//         </KaKaoLogin>
//       </div>
//     );
//   }
// }

export default LoginKaKao;
