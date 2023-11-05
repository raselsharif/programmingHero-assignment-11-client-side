import { Button, Card } from "flowbite-react";
import img from "/banner01.jpg";
import { Link } from "react-router-dom";
import SkeletonLoading from "../Loadings/SkeletonLoading";
import axios from "axios";
import toast from "react-hot-toast";

const AllBlogCard = ({ blog, blogsPending }) => {
  if (blogsPending) {
    return <SkeletonLoading />;
  }
  const { title, _id, short_desc, category, image } = blog;
  const handleWishlist = () => {
    console.log("wishlist");
    const wishlistBlog = {
      title,
      id: _id,
      short_desc,
      image,
      category,
    };
    console.log(wishlistBlog);
    axios
      .post("http://localhost:5000/v1/post-wishlist", wishlistBlog)
      .then((res) => {
        console.log(res.data);
        toast.success("Wishlist Added Successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Wishlist not added!");
      });
  };
  return (
    <Card
      className="max-w-full"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image ? image : img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {short_desc}
      </p>
      <div>
        <p>{category}</p>
      </div>
      <div className="flex justify-between">
        <Link to={`/blog-details/${_id}`}>
          <Button>Details</Button>
        </Link>
        <Button onClick={handleWishlist}>Add to Wishlist</Button>
      </div>
    </Card>
  );
};

export default AllBlogCard;
