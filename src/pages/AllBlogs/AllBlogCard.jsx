import { Button } from "flowbite-react";
import img from "/banner01.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useAxios from "../../hooks/useAxios";

const AllBlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const { title, _id, short_desc, category, image } = blog;
  const handleWishlist = () => {
    // console.log("wishlist");
    const wishlistBlog = {
      title,
      id: _id,
      short_desc,
      image,
      category,
      user_email: user.email,
    };
    // console.log(wishlistBlog);
    axios
      .post("/post-wishlist", wishlistBlog)
      .then((res) => {
        // console.log(res.data);
        toast.success("Wishlist Added Successfully!");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Wishlist not added!");
      });
  };
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`/blog-delete/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       toast.success("Blog deleted Successfully!");
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Blog not deleted!");
  //     });
  // };
  return (
    <div className="max-w-full flex flex-col shadow-sm shadow-[#0E7490] pb-6 rounded-xl">
      <PhotoProvider>
        <PhotoView src={image ? image : img}>
          <img
            className="h-52 w-full rounded-t-xl mb-3 cursor-pointer"
            src={image ? image : img}
            alt="blog image"
          />
        </PhotoView>
      </PhotoProvider>
      <div className="px-4 space-y-3 mb-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {short_desc}
        </p>
      </div>
      <div className="mt-auto px-4">
        <p className="font-semibold mb-3">{category}</p>
        <div className="flex justify-between">
          <Link to={`/blog-details/${_id}`}>
            <Button>Details</Button>
          </Link>
          <Button onClick={handleWishlist}>Add to Wishlist</Button>
        </div>
      </div>
      {/* <Button
        className="mt-3 hidden"
        onClick={() => handleDelete(_id)}
        color="failure"
      >
        Delete
      </Button> */}
    </div>
  );
};

export default AllBlogCard;
