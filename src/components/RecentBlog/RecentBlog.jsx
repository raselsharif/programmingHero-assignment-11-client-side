import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import axios from "axios";
import SkeletonLoading from "../../pages/Loadings/SkeletonLoading";

const RecentBlog = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["recent-blog"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/v1/all-blogs");
      return res;
      // console.log(res.data);
    },
  });
  if (isPending) {
    return <SkeletonLoading></SkeletonLoading>;
  }
  // console.log(data);
  return (
    <div className="my-10">
      <h2 className="text-center border-b-2 pb-2 text-3xl">Recent Blogs</h2>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((blogs) => (
          <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
