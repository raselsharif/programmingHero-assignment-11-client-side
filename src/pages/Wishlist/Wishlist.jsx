import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold bg-[#155e75] w-full py-4 text-white text-center rounded-lg">
        Your Wishlist
      </h2>
      <div>
        <WishlistCard></WishlistCard>
        <WishlistCard></WishlistCard>

        <WishlistCard></WishlistCard>

        <WishlistCard></WishlistCard>
        <WishlistCard></WishlistCard>
      </div>
    </div>
  );
};

export default Wishlist;
