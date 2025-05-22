import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ validUser }) => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  return (
    <div>
      <input />
      <input />
      <button className="button">로그인</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
