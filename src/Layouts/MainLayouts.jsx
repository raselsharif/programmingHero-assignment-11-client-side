import { Outlet } from "react-router-dom";
import Footer from "./MyFooter";
import NavBar from "./NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayouts = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <ScrollToTop />
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
