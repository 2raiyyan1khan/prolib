import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ active, title, to, className, icon }) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center p-2 border-l-[3px]  ${
        active
          ? ` border-mainPrimary text-textPrimary  `
          : "text-textSecondary border-transparent"
      }  hover:border-mainPrimary  hover:text-textPrimary ${className}`}
    >
      {icon && icon}
      <span class="ml-3 text-sm font-medium"> {title} </span>
    </NavLink>
  );
};

export default NavLinkComponent;
