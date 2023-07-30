import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login-image.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const business = {
      email: email,
      password: password,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/business/login`, business)
      .then((res) => {
        if ((res.status = 200)) {
          localStorage.setItem("loggedBusiness", JSON.stringify(res.data))
          navigate("/dashboard");
        } else {
          alert(res.message);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="bg-neutral-800 w-[300px] h-full hidden md:block relative p-[15px]">
            <img className="absolute bottom-[20px] w-[90%]" src={LoginImage} />
          </div>
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-neutral-800 font-bold text-2xl mb-[20px]">
                General ERP
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Password"
                    className="px-[10px] h-[40px] border-[2px] border-neutral-800 rounded w-full outline-0"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  {error ? (
                    <div className="bg-red-100 border-[2px] border-red-700 text-red-700 rounded text-center w-full text-sm p-[10px]">
                      {error}
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    type="submit"
                    className="bg-neutral-800 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-neutral-700"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="grid">
                <Link
                  to="/forgot"
                  className="text-neutral-800 text-sm hover:text-neutral-700"
                >
                  Forgot password?
                </Link>
                <Link
                  to="/signup"
                  className="text-neutral-800 text-sm hover:text-neutral-700"
                >
                  Don't have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
