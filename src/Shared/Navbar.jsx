import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";

const Navbar = () => {
  const user = "shanin";

  return (
    <nav className="bg-gradient-to-r from-[#2e85ff] via-[#01bfff] to-[#60ccff] py-2">
      <div className="navbar container mx-auto justify-between">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add A Toy</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-16" src={logo} alt="logo" />
              <p className="font-bangers uppercase text-3xl">Toy Paradise</p>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1 font-archivo text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all_toys"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_toys"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add_a_toy"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Add A Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn font-archivo capitalizeF">login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
