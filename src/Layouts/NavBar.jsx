import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const menus = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink>Add Blog</NavLink>
      <NavLink>All Blogs</NavLink>
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
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{menus}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
