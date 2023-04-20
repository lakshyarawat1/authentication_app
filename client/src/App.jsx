import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
import { SiHackerone } from "react-icons/si";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = user;

    if (password === confirmPassword) {
      const payload = {
        userName,
        email,
        password,
      };

      axios
        .post("http://localhost:8000/auth/register", payload)
        .then((res) => console.log(res));
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match",
        footer: '<a href="#password">Resolve the issue ? </a>',
        background: "#000",
        color: "#fff",
      });
    }
  };

  return (
    <div className="bg-[#3e3838] h-[100vh] fixed">
      <img
        src="https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621_1280.jpg"
        className="h-[130vh] w-[230vh] opacity-30 bg-contain"
      />
      {/* register page */}
      <div className="top-20 absolute shadow-2xl box left-1/4 grid grid-cols-4 w-1/2 h-3/4">
        <div className=" text-4xl text-white col-span-4 text-center m-5 opacity-40 hover:opacity-100">
          Authentication System
        </div>
        <form
          className="text-white text-2xl opacity-70 w-full m-5 col-span-4 grid grid-cols-4"
          onSubmit={handleSubmit}
        >
          <label className="text-center col-span-1">Name : </label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            placeholder="Enter your userName"
            className="bg-transparent border-white col-span-2 border text-lg mb-10"
            onChange={handleChange}
          />
          <br />
          <label className="text-center col-span-1">Email : </label>
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter your email Id"
            className="col-span-2 bg-transparent border-white border text-lg mb-10"
            onChange={handleChange}
          />
          <br />
          <label className="text-center">Password : </label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
            className="mb-10 col-span-2 bg-transparent border-white border text-lg"
          />{" "}
          <br />
          <label className="text-center text-xl">Confirm Password : </label>
          <input
            type="password"
            name="confirmPassword"
            className="bg-transparent col-span-2 border-white border text-lg"
            value={user.confirmPassword}
            placeholder="Enter your password again"
            onChange={handleChange}
          />{" "}
          <br />
          <button
            type="submit"
            className="bg-transparent border border-white mt-10 col-start-2 col-end-4 hover:bg-white hover:text-black"
          >
            Register
          </button>
        </form>
      </div>
      <div className="absolute top-0 right-5 text-white w-1/12">
        <div className="text-4xl text-white m-10">
          <FcGoogle className="mb-16 hover:text-5xl" />
          <BsGithub className="mb-16 hover:text-5xl" />
          <BsFacebook className="mb-16 hover:text-5xl" />
          <SiHackerone className="mb-16 hover:text-5xl" />
          <BsTwitter className="mb-16 hover:text-5xl" />
        </div>
      </div>
    </div>
  );
}

export default App;
