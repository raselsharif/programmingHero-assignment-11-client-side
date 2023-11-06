import { Button, Card } from "flowbite-react";
import img from "/banner01.jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const { title, _id, short_desc, category, image } = blogs;

  return (
    <Card className="max-w-full">
      <img className="h-48 w-full" src={image ? image : img} alt="blog image" />
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
        <Button>Add to Wishlist</Button>
      </div>
    </Card>
  );
};

export default BlogCard;
