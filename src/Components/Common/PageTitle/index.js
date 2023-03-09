import React from "react";

function index({ title, description, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-textPrimary ">{title}</h2>
        {children}
      </div>

      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default index;
