import BlogCard from "./BlogCard";

const RecentBlog = () => {
  return (
    <div className="my-10">
      <h2 className="text-center border-b-2 pb-2 text-3xl">Recent Blogs</h2>
      <div className="my-8 grid grid-cols-3 gap-4">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default RecentBlog;
