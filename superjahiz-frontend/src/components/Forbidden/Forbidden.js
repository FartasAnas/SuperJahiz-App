import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Forbidden.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Forbidden() {
    library.add(faExclamationTriangle);
  return (
    <div className="forbidden-page">
      <NavBar />
      <div className="forbidden-adjust">
        <div className="forbidden ">
          <FontAwesomeIcon
            icon="exclamation-triangle"
            className="logo"
            style={{ fontSize: "15em" }}
          />
        </div>
        <div className="forbidden">
          <h2> 403 Forbidden </h2>
        </div>
        <div className="forbidden">
          <h4>
            {" "}
            You do not have access to this resource.
          </h4>
        </div>
      </div>
    </div>
  );
}
