import { Button, TextInput } from "flowbite-react";

const NewsLetter = () => {
  return (
    <div className="bg-[#155E75] text-white py-4 text-center mb-6">
      <h2 className="font-semibold text-2xl my-4">Subscribe Our News Letter</h2>
      <div className="max-w-lg mx-auto">
        <form>
          <div className="w-full flex mb-4">
            <TextInput
              className="w-full"
              type="email"
              placeholder="Type Your Email.."
              required
            />
            <Button color="dark">Subscribe</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
