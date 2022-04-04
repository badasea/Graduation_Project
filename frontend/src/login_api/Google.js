import React, { useEffect, useState, useRef } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const clientId = process.env.REACT_APP_GOOGLE_ID;

export default function Google() {
  const googleLoginBtn = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    googleSDK();
  }, []);

  //SDK 초기 설정 및 내 API초기화
  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      // console.log(window.gapi);
      window.gapi.load("auth2", () => {
        const auth2 = window.gapi.auth2.init({
          client_id: clientId,
          scope: "profile email",
        });
        //버튼 클릭시 사용자 정보 불러오기
        auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          (googleUser) => {
            const profile = googleUser.getBasicProfile();
            // console.log(profile);
            // console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            // console.log(`ID: ${profile.getId()}`);
            // console.log(`Name: ${profile.getName()}`);
            // console.log(`Image URL: ${profile.getImageUrl()}`);
            // console.log(`Email: ${profile.getEmail()}`);
            let data = {
              user_email: profile.getEmail(),
              user_name: profile.getName(),
              user_img: profile.getImageUrl(),
              user_sns: "true",
            };

            //console.log(data);
            axios.post("/api/user", data).then(function (res) {
              // console.log(res.data);
            });
            var url =
              process.env.REACT_APP_API_URL +
              "/api/user/login/" +
              data.user_email;
            axios
              .get(url)
              .then(function (response) {
                // console.log(response.data);
                const session = response.data[0];
                const userObj = { data: session };
                window.sessionStorage.setItem("data", JSON.stringify(userObj));
                const session_type = response.data[0].user_type;
                window.sessionStorage.setItem(
                  "type",
                  JSON.stringify(session_type)
                );

                document.location.href = "/";
              })
              .catch(function (error) {
                //console.log("실패");
              });
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      });
    };
    //구글 SDK 불러오기
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  return (
    <GoogleBtn id="gSignInWrapper">
      <span class="label" />
      <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
        <span className="buttonText">
          <IconButton
            aria-label="google"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ background: "#F5F5F5" }}
          >
            <Avatar src="../img/google.png"></Avatar>
          </IconButton>
        </span>
      </div>
    </GoogleBtn>
  );
}

const GoogleBtn = styled.div`
  #customBtn {
  }
  #customBtn:hover {
    cursor: pointer;
  }
  span.label {
    font-weight: normal;
  }
  span.icon {
    background: url("/Images/google_logo.svg") no-repeat;
    background-size: 50%;
    background-position: center;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }
  span.buttonText {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
`;

const onSuccess = (response) => {
  // console.log(response.profileObj);
  let data = {
    user_email: response.profileObj.email,
    user_name: response.profileObj.name,
    user_img: response.profileObj.imageUrl,
  };

  axios.post("/api/user", data).then(function (res) {
    // console.log(res.data);
  });
  var url =
    process.env.REACT_APP_API_URL + "/api/user/login/" + data.user_email;
  axios
    .get(url)
    .then(function (response) {
      // console.log(response.data);
      const session = response.data[0];
      const userObj = { data: session };
      window.sessionStorage.setItem("data", JSON.stringify(userObj));
      document.location.href = "/";
    })
    .catch(function (error) {
      //console.log("실패");
    });
};

// export default function GoogleLoginBtn({ onGoogleLogin }) {
//   const onSuccess = (response) => {
//     console.log(response.profileObj);
//     let data = {
//       user_email: response.profileObj.email,
//       user_name: response.profileObj.name,
//       user_img: response.profileObj.imageUrl,
//     };

//     axios.post("/api/user", data).then(function (res) {
//       console.log(res.data);
//     });
//     var url = "/api/user/login/" + data.user_email;
//     axios
//       .get(url)
//       .then(function (response) {
//         console.log(response.data);
//         setCookie("cookie", response.data[0].user_name, 1);
//         const session = response.data[0];
//         const userObj = { data: session };
//         window.sessionStorage.setItem("data", JSON.stringify(userObj));
//         document.location.href = "/";
//       })
//       .catch(function (error) {
//         //console.log("실패");
//       });
//   };

//   const onFailure = (error) => {
//     console.log(error);
//   };

//   function setCookie(name, value, exp) {
//     var date = new Date();
//     date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
//     document.cookie =
//       name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
//   }

//   // function GoogleLogin() {

//   // }
//   return (
//     <div>
//       <IconButton
//         aria-label="google"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         color="inherit"
//         onClick={GoogleLogin}
//         sx={{ background: "#fff" }}
//       >
//         <Avatar src="../img/google.png">
//           <GoogleLogin
//             //theme="dark"
//             clientId={clientId}
//             buttonText=""
//             // responseType={"id_token"}
//             style={{
//               border: "none",
//               background: "none",
//               padding: 0,
//               margin: 0,
//             }}
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//           />
//         </Avatar>
//       </IconButton>
//       {/* <GoogleLogin
//         //theme="dark"
//         clientId={clientId}
//         buttonText=""
//         // responseType={"id_token"}
//         style={{
//           border: "none",
//           background: "none",
//           padding: 0,
//           margin: 0,
//         }}
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//       /> */}
//     </div>
//   );
// }
