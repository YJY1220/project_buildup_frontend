//로그인화면
import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 className={styles.login}>로그인</h1>
      <input
        className={styles.id}
        id="id"
        name="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={onChange}
      />
      <br></br>
      <input
        className={styles.password}
        id="password"
        name="password"
        type="password"
        placeholder="패스워드를 입력하세요"
        value={password}
        onChange={onChange}
      />
      <br></br>
      <button className={styles.loginBtn}>로그인</button>
      <br></br>
      <button className={styles.joinBtn}>회원가입</button>
    </div>
  );
}

export default Login;
