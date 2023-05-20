import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="bg-black py-2 sticky top-0 z-40">
      <div className="navbar container mx-auto justify-between">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiBars3BottomLeft className="text-xl text-white"></HiBars3BottomLeft>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-archivo font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#2fcbff]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive ? "text-[#01bfff]" : ""
                  }
                >
                  All Toys
                </NavLink>
              </li>
              {user?.email && (
                <>
                  <li>
                    <NavLink
                      to="/myToys"
                      className={({ isActive }) =>
                        isActive ? "text-[#01bfff]" : ""
                      }
                    >
                      My Toys
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/addAToy"
                      className={({ isActive }) =>
                        isActive ? "text-[#01bfff]" : ""
                      }
                    >
                      Add A Toy
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-[#01bfff]" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-16" src={logo} alt="logo" />
              <p className="font-bangers text-[#2fcbff] uppercase text-3xl">
                Toy Paradise
              </p>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1 font-archivo text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#01bfff]" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive ? "text-[#01bfff]" : "text-white"
                }
              >
                All Toys
              </NavLink>
            </li>
            {user?.email && (
              <>
                <li>
                  <NavLink
                    to="/myToys"
                    className={({ isActive }) =>
                      isActive ? "text-[#01bfff]" : "text-white"
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addAToy"
                    className={({ isActive }) =>
                      isActive ? "text-[#01bfff]" : "text-white"
                    }
                  >
                    Add A Toy
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-[#01bfff]" : "text-white"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    src={user?.photoURL}
                  />

                  <Tooltip id="my-tooltip" className="z-50" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p
                    onClick={handleLogOut}
                    className="font-archivo font-medium"
                  >
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#01bfff] font-archivo capitalizeF">
                login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
