import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const Error = ({ resetError, message }) => {
  return (
    <main className="error-container">
      <nav className="header">
        <h1>Rancid Tomatillos</h1>
      </nav>
      <h1 className="error">{message}</h1>
      {message === "404: The URL you entered is not valid." && (
        <Link to="/">
          <button type="button" onClick={() => resetError()}>
            Back to Main
          </button>
        </Link>
      )}
    </main>
  );
};

export default Error;
