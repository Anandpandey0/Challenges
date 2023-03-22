import MobileviewLogin from "../components/mobileviewLogin";

import Image from "next/image";
import { useRouter } from "next/router";

import signInLogo from "../images/signin-logo.png";
import { ChevronRightIcon } from "@heroicons/react/solid";
import searchuser from "../../utils/searchUser";
import { useContext, useEffect, useState } from "react";

import loginUser from "../../utils/loginUser";
import { UserContext } from "../../context/userContext";

// import { setUserCookie } from "../../utils/useIndexedDB";

const Login = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [passwordField, setPasswordField] = useState(false);

  const [password, setPassword] = useState("");
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const data = await searchuser(email);
    // console.log(data);
    setPasswordField(data);
  };
  const changeEmailHandler = () => {
    setEmail("");
    setPasswordField(false);
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

  return (
    <>
      {userDetails && console.log(userDetails)}
      <div className="hidden flex-col mx-auto w-1/2 lg:w-1/4  h-[100vh] md:flex ">
        <div className="  logo relative h-10 w-1/3 mx-auto py-4  ">
          <Image src={signInLogo} alt="logo" className="object-contain " />
        </div>
        <div className="border-2 border-solid border-gray-300 mt-16 p-2 px-10 py-8 rounded-lg">
          <h1 className="text-xl font-semibold ">Sign In</h1>
          {passwordField ? (
            <>
              <div>
                {email}{" "}
                <button
                  className="text-[13px] text-blue-400 hover:text-yellow-400 hover:underline"
                  onClick={changeEmailHandler}
                >
                  Change
                </button>
              </div>
              <form onSubmit={handlePasswordSubmit}>
                <div className="mt-4 font-semibold ">Password</div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-solid border-gray-500 w-full px-2 outline-orange-400  outline-8 rounded-md p-1"
                />
                <button
                  className="flex items-center justify-center w-full text-center border-2 border-solid bg-yellow-400 mt-4 p-1 text-sm rounded-md"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={handleEmailSubmit}>
                <div className="mt-4 font-semibold ">Email</div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-solid border-gray-500 w-full px-2 outline-orange-400  outline-8 rounded-md p-1"
                />
                <button
                  className="flex items-center justify-center w-full text-center border-2 border-solid bg-yellow-400 mt-4 p-1 text-sm rounded-md"
                  type="submit"
                >
                  Continue
                </button>
              </form>
            </>
          )}

          <div className="text-[12px] mt-4">
            By continuing, you agree to Amazon{" "}
            <span className="text-blue-600 hover:text-orange-400 cursor-pointer hover:underline decoration-solid">
              {" "}
              Conditions of Use
            </span>{" "}
            and{" "}
            <span className="text-blue-600 hover:text-orange-400 cursor-pointer  hover:underline decoration-solid">
              Privacy Notice.
            </span>
          </div>
          <div className="flex items-center mt-6">
            <ChevronRightIcon className="h-5 " />
            <span className="text-blue-600 hover:text-orange-400 cursor-pointer text-sm  hover:underline decoration-solid">
              Need help?
            </span>
          </div>
        </div>
        <button
          className="flex  text-black bg-gray-300 mt-4 text-sm p-2  justify-center"
          onClick={() => router.push("/signup")}
        >
          Create your Amazon account
        </button>
      </div>

      <div className="md:hidden">
        <MobileviewLogin />
      </div>
    </>
  );
};

export default Login;
