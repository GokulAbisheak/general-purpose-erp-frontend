import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/signup_image.png";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const validateInputs = (e) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let error = {};

    if (!(name.length > 0)) {
      error.name = "Name is required";
    }

    if (!emailRegex.test(email)) {
      error.email = "Invalid email";
    }

    if (!(email.length > 0)) {
      error.email = "Email is required";
    }

    if (!(password.length >= 8)) {
      error.password = "Password should be atleast 8 character long";
    }

    if (!(password.length > 0)) {
      error.password = "Password is required";
    }

    if (password != confirmPassword) {
      error.confirmPassword = "Passwords  do not match";
    }

    setErrors(error);
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateInputs();

    if (Object.keys(error).length > 0) {
      return;
    }

    const business = {
      email: email,
      name: name,
      password: password,
    };

    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/business/exists/${email}`)
      .then((res) => {
        if (res.data.status == false) {
          axios
            .post(`${import.meta.env.VITE_SERVER_URL}/business/add`, business)
            .then(navigate("/login"))
            .catch((error) => {
              alert(error);
            });
        } else {
            alert('Business with this email already exists');
        }
      });
  };

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className="flex shadow-none md:shadow-[0_0_10px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px]">
          <div className="bg-purple-700 w-[300px] h-full hidden md:block relative p-[15px">
            <img className="absolute bottom-[10%] w-full" src={SignupImage} />
          </div>
          <div className="w-[400px] h-full flex items-center justify-center">
            <div className="justify-center items-center w-full px-[50px]">
              <div className="justify-center text-center items-center text-purple-700 font-bold text-2xl mb-[20px]">
                General ERP
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-[10px]">
                  <div>
                    <input
                      type="text"
                      placeholder="Business Name"
                      className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                    {errors && errors.name ? (
                      <div className="text-red-700 text-sm">{errors.name}</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                    {errors && errors.email ? (
                      <div className="text-red-700 text-sm">{errors.email}</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                    {errors && errors.password ? (
                      <div className="text-red-700 text-sm">
                        {errors.password}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="px-[10px] h-[40px] border-[2px] border-purple-700 rounded w-full outline-0"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    ></input>
                    {errors && errors.confirmPassword ? (
                      <div className="text-red-700 text-sm">
                        {errors.confirmPassword}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-700 h-[40px] text-white mt-[10px] mb-[10px] rounded uppercase text-sm font-semibold w-full hover:bg-purple-900"
                  >
                    Signup
                  </button>
                </div>
              </form>
              <div className="grid">
                <Link
                  to="/login"
                  className="text-purple-700 text-sm hover:text-purple-900"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
