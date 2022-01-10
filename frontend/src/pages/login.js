import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  var [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUser(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("/api/user");
      setUser(response.data); // 데이터는 response.data 안에 들어있습니다.
      //console.log(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(user);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h1>Login Page</h1>
      <input value={user[0].user_name}></input>
    </div>
  );
}

export default Login;
