import { Button, TextInput } from "flowbite-react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const newsHandler = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };
  return (
    <div className="bg-[#155E75] text-white py-4 text-center mb-6 rounded-lg">
      <h2 className="font-semibold text-2xl my-4">Subscribe Our News Letter</h2>
      <div className="max-w-lg mx-auto">
        <form onSubmit={newsHandler}>
          <div className="w-full flex mb-4">
            <TextInput
              className="w-full"
              type="email"
              placeholder="Type Your Email.."
              required
            />
            <Button type="submit" color="dark">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
