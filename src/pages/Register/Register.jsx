import { Button, Card, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Register = () => {
  const { emailPassResister } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password, image);

    emailPassResister(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[1200px] mx-auto">
      <h2 className="my-4 text-2xl font-semibold bg-[#155e75] w-full py-4 text-white text-center rounded-lg">
        Welcome to RS Blog
      </h2>
      <Card className="w-80 border border-[#155e75]">
        <h3 className="text-[#155e75] w-full py-2 text-center  font-semibold rounded-lg text-2xl border-b-2">
          Pls! Register
        </h3>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Name" />
            </div>
            <TextInput
              type="text"
              name="name"
              placeholder="Type your Name"
              //   required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Image (Optional)" />
            </div>
            <TextInput
              type="text"
              name="image"
              placeholder="Past Image URL"
              //   required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Email" />
            </div>
            <TextInput
              type="email"
              name="email"
              placeholder="Type your mail"
              //   required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Password" />
            </div>
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              // required
            />
          </div>
          <div className="flex items-center gap-2"></div>
          <Button type="submit">Register</Button>
        </form>
        <p>
          Have an account?{" "}
          <Link
            className="text-[#155e75] font-semibold hover:text-blue-500"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
