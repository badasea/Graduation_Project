import React from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import axios from "axios";

const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

const buttonBlock = {
  border: "none",
  borderRadius: "9px",
  fontSize: "17px",
  width: "284px",
  fontWeight: "500",
  height: "32px",
  cursor: "pointer",
  background: "#fae101",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "4px 0px",
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
`;

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
        document.location.href = "/main";

        // console.log(response.data[0].user_email);
        // console.log(data.user_email);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  return (
    <div>
      <KaKaoLogin
        token={KAKAO_KEY}
        buttonText="kakao"
        onSuccess={login}
        onFail={console.error}
        onLogout={console.info}
        style={buttonBlock}
      >
        <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
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
