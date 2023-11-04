import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const NavBar = () => {
  const { user, firebaseLogOut } = useContext(AuthContext);
  console.log(user);
  const logOut = () => {
    console.log("logout");
    firebaseLogOut()
      .then(() => {
        alert("sign out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const menus = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addblog"}>Add Blog</NavLink>
      <NavLink to={"/allblogs"}>All Blogs</NavLink>
      <NavLink>Featured Blogs</NavLink>
      <NavLink>Wishlist</NavLink>
    </>
  );
  return (
    <div>
      <Navbar fluid rounded>
        <Link to={"/"} className="flex">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RS Tech
          </span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={user?.photoURL ? user?.photoURL : "/profile.jpg"}
                    rounded
                    bordered
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm mb-2 text-[#155e75]">
                    {user?.displayName ? user?.displayName : "Name not set"}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <Link to={"/login"}>
              <Button>Login/Register</Button>
            </Link>
          )}
        </div>

        <Navbar.Collapse>{menus}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
