import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import img from "/banner01.jpg";

const WishlistCard = () => {
  return (
    <Card
      className="max-w-full"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div>
        <p>Category</p>
      </div>
      <div className="flex justify-between">
        <Link to={"/"}>
          <Button>Details</Button>
        </Link>
        <Button color="failure">Remove</Button>
      </div>
    </Card>
  );
};

export default WishlistCard;
