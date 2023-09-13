import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { Thanks } from "./Thanks";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// export const UserContext = createContext();
export const Form = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const navigate = useNavigate();
  const InputRef = useRef();
  const emailValue = () => {
    const value = InputRef.current.value;
    return setUser(value);
  };

  const validEmail = (user) => {
    const regEmail = /^[^\s@]\w+\d?@\w+.\w+/g;
    return regEmail.test(user);
  };

  const submitHandel = (e) => {
    e.preventDefault();
    if (validEmail(user)) {
      navigate("/thanks");
    } else if (user) {
      setSubmitted(false);
    }
  };

  const errorHandel = () => {
    if (!user) {
      setError("Please enter a valid email address");
    } else if (!validEmail(user)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };
  return (
    <>
      <form className="m-4" onSubmit={submitHandel}>
        <label className="fw-bold">Email Address</label>

        {error && <div style={{ color: "red" }}>{error}</div>}
        <input
          onBlur={errorHandel}
          id="inputStyle"
          type="email"
          placeholder="email@company.com"
          className={`${error}` ? "errorInput" : ""}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoFocus
          ref={InputRef}
        />
        <div className="m-4">
          <button type="submit" className="btn btn-dark h-75">
            Subscribe to monthly newsletters
          </button>
        </div>
        <Thanks value={user} />
      </form>
    </>
  );
};
