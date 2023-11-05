import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import img from "/banner01.jpg";
import axios from "axios";
import toast from "react-hot-toast";

const WishlistCard = ({ wishlist }) => {
  const { title, _id, short_desc, category, image, id } = wishlist;
  const deleteWishlist = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/v1/wishlist-delete/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully!");
      })
      .catch((err) => {
        toast.error("Not Deleted!");
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
        <Link to={`/blog-details/${id}`}>
          <Button>Details</Button>
        </Link>
        <Button onClick={() => deleteWishlist(_id)} color="failure">
          Remove
        </Button>
      </div>
    </Card>
  );
};

export default WishlistCard;
