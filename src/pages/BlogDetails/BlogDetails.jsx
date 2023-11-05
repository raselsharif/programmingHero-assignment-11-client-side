import { Button, Label, Textarea } from "flowbite-react";
import img from "/banner01.jpg";
import BlogComments from "./BlogComments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  // const { isPending, data, error } = useQuery({
  //   queryKey: ["blog-details"],
  //   queryFn: () => {
  //     return axios
  //       .get(`http://localhost:5000/v1/blog-details/${_id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // });
  // console.log(data);
  const loadedBlog = useLoaderData();
  // console.log(loadedBlog);
  const { title, _id, short_desc, category, long_desc, image } = loadedBlog;

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border p-4 rounded-xl">
        <div>
          <img
            className="rounded-lg"
            src={image ? image : img}
            alt="blog image"
          />
        </div>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {short_desc}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {long_desc}
          </p>
        </div>
      </div>

      <div className="mt-6 max-w-xl">
        <form>
          <Label
            value="Sent Your Feedback to us..."
            className="font-semibold text-lg"
          ></Label>
          <Textarea
            className="w-full my-4"
            placeholder="Type Your Feedback....."
            required
            rows={8}
          />
          <Button type="submit">Post</Button>
        </form>
      </div>
      <div className="mt-8 ">
        <h2 className="font-semibold text-xl text-center border-b border-[#155e75] pb-3 mb-4">
          All Comments
        </h2>
        <div>
          <BlogComments></BlogComments>
          <BlogComments></BlogComments>
          <BlogComments></BlogComments>
          <BlogComments></BlogComments>
          <BlogComments></BlogComments>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
