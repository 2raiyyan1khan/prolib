import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="flex ">
      <div className=" w-5/6  p-16"></div>
    </main>
    // <div className="bg-base-300 shadow-lg">
    //   <div className="container mx-auto navbar ">
    //     <div className="navbar-start">
    //       <Link to={"/"} className="btn btn-ghost normal-case text-xl">
    //         Lib!t
    //       </Link>
    //     </div>
    //     <div className="navbar-end hidden lg:flex ">
    //       <ul className="menu menu-horizontal p-0 gap-3">
    //         <li>
    //           <NavLink to="/my-lib" activeClassName="active">
    //             My Lib
    //           </NavLink>
    //         </li>
    //         <a
    //           class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    //           href="/download"
    //         >
    //           Download
    //         </a>

    //         <a
    //           class="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
    //           href="/download"
    //         >
    //           Download
    //         </a>
    //       </ul>
    //     </div>
    //     {true ? (
    //       <div className="navbar-end gap-3">
    //         <Link to={"/login"} className="btn btn-primary">
    //           Log In
    //         </Link>
    //         <Link to={"/register"} className="btn btn-secondary">
    //           Register
    //         </Link>
    //       </div>
    //     ) : (
    //       <div className="navbar-end">
    //         <div className=" dropdown dropdown-end">
    //           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //             <div className="w-10 rounded-full">
    //               <img src="https://placeimg.com/80/80/people" alt="" />
    //             </div>
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52"
    //           >
    //             <li>
    //               <NavLink to={"#"} className="justify-between">
    //                 Profile
    //               </NavLink>
    //             </li>

    //             <li>
    //               <Link to={"#"}>Logout</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
