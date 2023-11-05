import { Button, Card, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const goTo = useNavigate();
  const { emailPassLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    emailPassLogin(email, password)
      .then((res) => {
        console.log(res.user);
        goTo("/");
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
          Pls! Login
        </h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
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
              <Label value="Your password" />
            </div>
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              // required
            />
          </div>
          <div className="flex items-center gap-2"></div>
          <Button type="submit">Login</Button>
        </form>
        <p>
          New here?{" "}
          <Link
            className="text-[#155e75] font-semibold hover:text-blue-500"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
