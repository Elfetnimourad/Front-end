import React, { useContext, useRef, useState } from "react";
import "./thanks.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "./CardParent";
import { Form } from "./Form";
export const Thanks = ({ user }) => {
  return (
    <div className="thanks-body">
      <div className="card here p-5 d-none ">
        <CheckCircleIcon className="CheckCircleIconStyle" />
        <h1 className="fw-bold">Thanks for subscribing!</h1>
        <h6>
          a confirmation email has been sent to {user} Please open it and click
          the button inside to confirm your subcription
        </h6>
        <div className="dismiss mt-5">
          <Link to={"/"}>
            <button className="btnDismiss ">Dismiss message</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
