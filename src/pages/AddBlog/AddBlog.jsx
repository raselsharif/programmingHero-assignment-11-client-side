import axios from "axios";
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

const AddBlog = () => {
  // get categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/v1/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const formHandler = (e) => {
    e.preventDefault();
    const blogInfo = {
      title: e.target.title.value,
      short_desc: e.target.short_desc.value,
      long_desc: e.target.long_desc.value,
      category: e.target.category.value,
      image: e.target.image.value,
    };
    console.log(blogInfo);
    axios.post("http://localhost:5000/v1/post-blog", blogInfo).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto my-10">
      <h2 className="text-2xl mb-8 border-b-2 pb-3 font-semibold mt-4">
        Add Your Blog
      </h2>
      <div>
        <Card className="my-4">
          <form onSubmit={formHandler} className="flex w-96 flex-col gap-4 ">
            <div>
              <div className="mb-2 block">
                <Label value="Title" />
              </div>
              <TextInput
                name="title"
                type="text"
                placeholder="Write Title..."
                //   required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Sort Description" />
              </div>
              <TextInput
                name="short_desc"
                type="text"
                placeholder="Write Short description.."
                //  required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Description" />
              </div>
              <TextInput
                name="long_desc"
                type="text"
                placeholder="Write description.."
                //  required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label value="Select Your Category" />
              </div>
              <Select name="category" required>
                {categories?.map((category) => (
                  <option key={category._id}>{category.category}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Image" />
              </div>
              <TextInput
                name="image"
                type="text"
                placeholder="Past Image URL"
                //  required
              />
            </div>
            <Button type="submit">Add Blog</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddBlog;
