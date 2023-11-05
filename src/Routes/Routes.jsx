import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import AddBlog from "../pages/AddBlog/AddBlog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import FeatureBlog from "../pages/FeatureBlog/FeatureBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/update-blog",
        element: <UpdateBlog></UpdateBlog>,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/blog-details",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/features",
        element: <FeatureBlog></FeatureBlog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
