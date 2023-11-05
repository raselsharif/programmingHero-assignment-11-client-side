import { Button, Select, TextInput } from "flowbite-react";
import AllBlogCard from "./AllBlogCard";
import useCategoriesApi from "../../hooks/useCategoriesApi";
import SkeletonLoading from "../Loadings/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllBlogs = () => {
  // all blogs
  const { data, isPending, error } = useCategoriesApi();
  const {
    isPending: blogsPending,
    error: blogsError,
    data: blogsData,
  } = useQuery({
    queryKey: ["allblogs"],
    queryFn: () => {
      return axios.get("http://localhost:5000/v1/all-blogs");
    },
  });
  // console.log(blogsData);
  // console.log(data?.data);
  // if (blogsPending) {
  //   return <SkeletonLoading></SkeletonLoading>;
  // }
  // if (blogsError) {
  //   return <p>data not found</p>;
  // }
  // get all categories
  // if (isPending) {
  //   return <SkeletonLoading />;
  // }
  // if (error) {
  //   return <p>Data not found</p>;
  // }
  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold bg-[#155e75] w-full py-4 text-white text-center rounded-lg">
        All Blogs
      </h2>
      <div className="flex justify-between mb-4 border-b border-[#155E75] pb-2">
        <div>
          <Select className="cursor-pointer">
            <option className="my-1" value="">
              Select Category
            </option>
            {data?.map((category) => (
              <option className="cursor-pointer" key={category._id}>
                {category.category}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex">
          <TextInput placeholder="Search by Title"></TextInput>
          <Button>Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsData?.data?.map((blog) => (
          <AllBlogCard
            key={blog._id}
            blog={blog}
            blogsPending={blogsPending}
          ></AllBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
