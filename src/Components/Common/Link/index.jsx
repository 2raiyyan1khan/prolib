import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ to, title, click, className }) => {
  return (
    <Link to={to} onClick={click} className={`underline ml-1 ${className}`}>
      {title}
    </Link>
  );
};

export default Link;
