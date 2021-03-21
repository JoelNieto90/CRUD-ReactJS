import React, { useState } from "react";
import "../styles/Button.scss";

const MiButton = ({ text, className, onChange }) => {
  return (
    <>
      <button type="button" className={className} >
        <p>{text}</p>
      </button>
    </>
  );
};

export default MiButton;
