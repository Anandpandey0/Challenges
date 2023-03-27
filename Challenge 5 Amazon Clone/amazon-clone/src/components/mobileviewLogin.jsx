import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/nav-logo.png";

import registerUser from "../../utils/registerUser";

import { useRouter } from "next/router";
import searchuser from "../../utils/searchUser";
import { UserContext } from "../../context/userContext";

import { useContext, useEffect } from "react";

import loginUser from "../../utils/loginUser";

const MobileviewLogin = () => {
  const router = useRouter();
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordField, setPasswordField] = useState(false);
  const { userDetails, setUserDetails } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const changeHandler = () => {
    setSignIn(!signIn);
    setSignUp(!signUp);
  };
  const handleNumberInput = (event) => {
    const inputValue = event.target.value;
    // restrict input to numbers only
    const filteredValue = inputValue.replace(/\D/g, "");
    // limit input to 5 digits
    const maxLengthValue = filteredValue.slice(0, 10);
    setPhone(maxLengthValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registerUser(name, email, password, phone);
    router.push("/");
  };
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const data = await searchuser(email);
    // console.log(data);
    setPasswordField(data);
    setPassword("");
  };
  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    const data = await loginUser(email, password);
    // console.log(data);
    // setUserDetails(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    const userInfo = localStorage.getItem("userInfo");
    setUserDetails(JSON.parse(userInfo));
    // setUserCookie(data);
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));

    if (data.success) {
      router.push("/");
    }
  };
  useEffect(() => {
    if (userDetails) {
      router.push("/");
    }
  }, []);
  const changeEmailHandler = () => {
    setEmail("");
    setPasswordField(false);
  };

  return (
    <div className="flex flex-col  ">
      <div className="logo  h-[9vh] bg-black flex items-center">
        <Image src={logo} alt="" height={40} className="px-2 ml-2" />
      </div>
      <div className=" h-max w-full px-4 py-2">
        <h1 className="text-xl font-semibold">Welcome</h1>
        {signIn && (
          <div className="border-2 border-solid border-gray-300 h-3/4 mt-4">
            <div className="create-account flex items-center text-lg px-4 bg-gray-200 py-2">
              <input
                type="radio"
                name="create-account "
                className="h-5 w-5"
                onChange={changeHandler}
              />
              <div className=" ml-4">
                <span className="font-semibold ">Create an account</span>{" "}
                <span className="text-sm">New to amazon?</span>
              </div>
            </div>
            <div className="flex items-center px-4 py-2 text-lg">
              <input
                type="radio"
                name="create-account "
                className="h-5 w-5 checked:text-orange-400"
              />
              <div className=" ml-4">
                <span className="font-semibold ">Sign In</span>{" "}
                <span className="text-sm">Already a customer?</span>
              </div>
            </div>
            {passwordField ? (
              <>
                <div className="ml-4">
                  {email}{" "}
                  <button
                    className="text-[13px] text-blue-400 hover:text-yellow-400 hover:underline"
                    onClick={changeEmailHandler}
                  >
                    Change
                  </button>
                </div>

                <form onSubmit={handlePasswordSubmit}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[90%] p-2 ml-4 mt-2 border-2 border-solid outline-orange-400"
                  />
                  <button
                    className="w-[90%] ml-4 mt-4 p-2 bg-yellow-400"
                    type="submit"
                  >
                    Log in
                  </button>
                </form>
              </>
            ) : (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[90%] p-2 ml-4 mt-2 border-2 border-solid outline-orange-400"
                />
                <button
                  className="w-[90%] ml-4 mt-4 p-2 bg-yellow-400"
                  type="submit"
                >
                  Continue
                </button>
              </form>
            )}

            <div className="text-[12px] mt-4 ml-4">
              By continuing, you agree to Amazon &apos s
              <span className="text-blue-600 hover:text-orange-400 cursor-pointer hover:underline decoration-solid">
                {" "}
                Conditions of Use
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:text-orange-400 cursor-pointer  hover:underline decoration-solid">
                Privacy Notice.
              </span>
            </div>
          </div>
        )}
        {signUp && (
          <form onSubmit={handleSubmit}>
            <div className="border-2 border-solid border-gray-300 h-fit mt-4">
              <div className="create-account flex items-center text-lg px-4  py-2">
                <input
                  type="radio"
                  name="create-account "
                  className="h-5 w-5"
                  checked={signUp}
                  onChange={changeHandler}
                />
                <div className=" ml-4">
                  <span className="font-semibold ">Create an account</span>{" "}
                  <span className="text-sm">New to amazon?</span>
                </div>
              </div>
              <input
                type="text"
                className="w-[90%] p-2 ml-4 mt-2 border-2 border-solid outline-orange-400"
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="w-[90%] p-2 ml-4 mt-2 border-2 border-solid outline-orange-400"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex gap-2 w-[90%] p-2 ml-2 mt-2 justify-between ">
                <div className="bg-gray-300 w-1/2 py-2 px-2 h-full flex justify-center ">
                  +91
                </div>

                <input
                  type="number"
                  maxLength={10}
                  onChange={handleNumberInput}
                  value={phone}
                  className="py-2 px-2 border-2 border-solid outline-orange-400 "
                  placeholder="Mobile Number"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-solid outline-orange-400 w-[90%]  p-2 ml-3 mt-2"
                placeholder="Set password"
              />
              <div className="p-2 flex items-center">
                <input
                  type="checkbox"
                  name="show-password"
                  className="h-5 w-5 ml-1"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />

                <label htmlFor="Show Password" className="text-sm ml-3">
                  Show Passord
                </label>
              </div>
              <div className="text-sm p-2 ml-1">
                By enrolling your mobile phone number, you consent to receive
                automated security notifications via text message from Amazon.
                Message and data rates may apply.
              </div>
              <button
                className="flex items-center bg-yellow-400 w-[90%] ml-2 mt-4 p-2 justify-center"
                type="submit"
              >
                Verify mobile number
              </button>

              <div className="text-[12px] mt-4 ml-4">
                By continuing, you agree to Amazon &apos s
                <span className="text-blue-600 hover:text-orange-400 cursor-pointer hover:underline decoration-solid">
                  {" "}
                  Conditions of Use
                </span>{" "}
                and{" "}
                <span className="text-blue-600 hover:text-orange-400 cursor-pointer  hover:underline decoration-solid">
                  Privacy Notice.
                </span>
              </div>
              <div className="create-account flex items-center text-lg px-4 bg-gray-200 py-2 mt-4">
                <input
                  type="radio"
                  name="create-account "
                  checked={signIn}
                  className="h-5 w-5"
                  onChange={changeHandler}
                />
                <div className=" ml-4">
                  <span className="font-semibold ">Sign In</span>{" "}
                  <span className="text-sm">Already a customer?</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MobileviewLogin;
