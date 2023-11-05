import { Button, Select, TextInput, Textarea } from "flowbite-react";
import AllBlogCard from "./AllBlogCard";

const AllBlogs = () => {
  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold bg-[#155e75] w-full py-4 text-white text-center rounded-lg">
        All Blogs
      </h2>
      <div className="flex justify-between mb-4 border-b border-[#155E75] pb-2">
        <div>
          <Select>
            <option>Category will be here</option>
            <option>Category will be here</option>
          </Select>
        </div>
        <div className="flex">
          <TextInput placeholder="Search by Title"></TextInput>
          <Button>Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AllBlogCard></AllBlogCard>
        <AllBlogCard></AllBlogCard>
        <AllBlogCard></AllBlogCard>
        <AllBlogCard></AllBlogCard>
        <AllBlogCard></AllBlogCard>
        <AllBlogCard></AllBlogCard>
      </div>
    </div>
  );
};

export default AllBlogs;
