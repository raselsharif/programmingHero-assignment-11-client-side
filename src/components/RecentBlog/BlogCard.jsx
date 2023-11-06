import { Button, Card } from "flowbite-react";
import img from "/banner01.jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const { title, _id, short_desc, category, image } = blogs;

  return (
    <div className="max-w-full flex flex-col shadow-sm shadow-[#0E7490] pb-6 rounded-xl">
      <img
        className="h-52 w-full rounded-t-xl mb-3"
        src={image ? image : img}
        alt="blog image"
      />
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
          <Button>Add to Wishlist</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
