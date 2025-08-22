import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContextWrapper";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";

const Navbar = () => {
  const { isLoggedIn, logout, loggedInUser } = useContext(AuthContext);
  const [isUserMenuOpen, toggleUserMenu] = useState(false);
  const [isCartOpen, toggleCart] = useState(false);

  const products = useSelector((state) => state.cart.value);

  return (
    <>
      {isCartOpen && <Cart toggleCart={toggleCart} />}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/useeffect"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>

          {isLoggedIn && (
            <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={() => toggleUserMenu(!isUserMenuOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={loggedInUser?.imageUrl || ""}
                  alt="user photo"
                />
              </button>
              {isUserMenuOpen && (
                <div
                  className="z-50 absolute top-6 right-0  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {loggedInUser?.name || ""}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {loggedInUser?.email || ""}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          )}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {/*<li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                  </ul>
                 
                  <div className="py-1">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </li>*/}
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                >
                  Career
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) => ` ${
                    isActive
                      ? "navlink-active"
                      : "md:hover:text-blue-700 text-white "
                  } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                  onClick={() => toggleCart(!isCartOpen)}
                >
                  Cart ({products.length})
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => ` ${
                      isActive
                        ? "navlink-active"
                        : "md:hover:text-blue-700 text-white "
                    } block py-2 px-3 rounded-sm md:border-0 md:p-0  hover:bg-gray-100 md:hover:bg-transparent
                                    dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                                    dark:hover:text-white
                                    `}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
