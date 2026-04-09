import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"
          className={({ isActive }) => `${(isActive ? "border border-green-500 rounded-2xl hover:bg-green-100 text-green-500 px-4" : "")}  font-bold  ` }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="books"  className={({ isActive }) => `${(isActive ? "border border-green-500 rounded-2xl hover:bg-green-100 text-green-500 px-4" : "")}  font-bold  ` }>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to ="pages to read"  className={({ isActive }) => `${(isActive ? "border border-green-500 rounded-2xl hover:bg-green-100 text-green-500 px-4" : "")}  font-bold  ` }>Pages to Read</NavLink>
      </li>
   
    </>
  );
  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex="-1"
            className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1 gap-4 items-center text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4 ">
        <button className="btn btn-success  border-none rounded-lg p-4 text-lg text-white  ">
          Sign In
        </button>
        <button className="btn btn-accent border-none rounded-lg p-4 text-lg text-white ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
