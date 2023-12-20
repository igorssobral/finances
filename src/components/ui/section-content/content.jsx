import React from "react";
import "./styles.css";

export const Content = (props) => {
  return (
    <div>
      <div className="content">
        {props.children}
        <div className="section_1"></div>
        <div className="section_2"></div>
      </div>
    </div>
  );
};
