import { Button, Label, Textarea } from "flowbite-react";
import img from "/banner01.jpg";
import BlogComments from "./BlogComments";

const BlogDetails = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border p-4 rounded-xl">
        <div>
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Title
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Short description
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            long description
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
