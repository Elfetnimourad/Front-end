import React from "react";
import "./cardParent.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Form } from "./Form";
export const UserContext = React.createContext();

export const CardParent = () => {
  return (
    <div className="card position-absolute z-999">
      <div className="col-md-7 mt-5 sss">
        <h1 className="text-center fw-bold mt-4 ms-1 fw-sm-bolder">
          Stay Updated!
        </h1>
        <div className="ms-3">
          Join 60,000 + Products managers receiving monthly updates on:
        </div>
        <div className="m-2">
          <div className="row mb-2">
            <div className="col-1">
              <CheckCircleIcon className="CheckCircleIcon" />
            </div>
            <div className="col-11">
              Product discovery and building what matters
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1">
              <CheckCircleIcon className="CheckCircleIcon" />
            </div>
            <div className="col-11">
              Measuring to ensure Updates are success
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <CheckCircleIcon className="CheckCircleIcon" />
            </div>
            <div className="col-11">And Much More!</div>
          </div>
        </div>
        <Form className="Form" />
      </div>
      <div className="col-5 col-sm-12 hereimage m-3"></div>
    </div>
  );
};
