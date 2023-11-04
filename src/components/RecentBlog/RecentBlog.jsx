import BlogCard from "./BlogCard";

const RecentBlog = () => {
  return (
    <div className="my-10">
      <h2 className="text-center border-b-2 pb-2 text-3xl">Recent Blogs</h2>
      <div>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default RecentBlog;
