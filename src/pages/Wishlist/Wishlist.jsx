import { useQuery } from "@tanstack/react-query";
import WishlistCard from "./WishlistCard";
import axios from "axios";
import SkeletonLoading from "../Loadings/SkeletonLoading";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const ownerEmail = user?.email;
  const { isPending, isFetching, error, data } = useQuery({
    queryKey: ["wishlist-by-user"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/v1/wishlist-by-user/${ownerEmail}`
        );
        console.log(res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
  });
  if (isFetching) {
    return <p>data fetching... Pls! wait..</p>;
  }
  if (isPending) {
    return <SkeletonLoading />;
  }
  if (error) {
    return <p>data not found</p>;
  }
  console.log(data);
  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold bg-[#155e75] w-full py-4 text-white text-center rounded-lg">
        Your Wishlist
      </h2>
      {data?.data == 0 ? (
        <h3 className="text-3xl py-9 w-full flex items-center justify-center font-semibold text-gray-400 min-h-[500px]">
          Wishlist is empty!
        </h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data.map((wishlist) => (
            <WishlistCard key={wishlist._id} wishlist={wishlist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
