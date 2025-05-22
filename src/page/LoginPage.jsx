import React, { useEffect, useRef, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import "../components/LoginForm/LoginForm.css";

const LoginPage = () => {
  const user = { id: "likelion", pw: "1954" };

  return (
    <div className="login-container">
      <h2>🦁멋쟁이 사자처럼 로그인🦁</h2>
      <LoginForm validUser={user} />
    </div>
  );
};

export default LoginPage;
