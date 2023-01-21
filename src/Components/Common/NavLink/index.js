import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ active, title, to, className, icon }) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center p-2 border-l-[3px]  rounded  ${
        active
          ? ` border-mainPrimary text-textPrimary  bg-bgSecondary`
          : "text-textSecondary border-transparent"
      }  hover:border-mainPrimary hover:bg-bgSecondary hover:text-textPrimary ${className}`}
    >
      {icon && icon}
      <span class="ml-3 text-sm font-medium"> {title} </span>
    </NavLink>
  );
};

export default NavLinkComponent;
