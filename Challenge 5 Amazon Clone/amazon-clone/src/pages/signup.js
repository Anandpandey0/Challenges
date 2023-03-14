import { useState } from "react";
import Image from "next/image";
import signInLogo from "../images/signin-logo.png";
import Link from "next/link";

import registerUser from "../../utils/registerUser";
// import { LockClosedIcon } from '@heroicons/react/solid';
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
  return (
    <>
      <div className="hidden flex-col mx-auto w-1/2 lg:w-1/4  h-[90vh] md:flex  text-sm">
        <div className="  logo relative h-10 w-1/3 mx-auto py-4  ">
          <Image src={signInLogo} alt="logo" className="object-contain " />
        </div>
        <div className="border-2 border-solid border-gray-300 mt-8 h-full p-8">
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 font-semibold">Your name</div>

            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              className="w-full mt-2 border-2 border-solid border-gray-300 outline-orange-400 px-2 py-1"
              placeholder="First and last name"
            />
            <div className="mt-2 font-semibold">Mobile number</div>
            <div className="flex items-center mt-2">
              <div className="bg-gray-300 px-2 py-1  ">IN +91</div>
              <input
                type="number"
                name="number"
                onChange={handleNumberInput}
                value={phone}
                className=" ml-2 border-2 border-solid border-gray-300 outline-orange-400 px-2 py-1 w-3/4"
                placeholder="Phone number"
              />
            </div>
            <div className="mt-2 font-semibold">Email </div>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full mt-2 border-2 border-solid border-gray-300 outline-orange-400 px-2 py-1"
              placeholder="Email"
            />
            <div className="mt-2 font-semibold">Password</div>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full mt-2 border-2 border-solid border-gray-300 outline-orange-400 px-2 py-1"
              placeholder="Atleast 6 characters"
            />
            <div className="mt-2 text-[13px]">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </div>
            <button className="bg-yellow-400  w-full mt-2 p-1" type="submit">
              Continue
            </button>
            <div className="mt-8">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Sign in
              </Link>{" "}
            </div>
            <div className="text-[10px] mt-8">
              By creating an account or logging in, you agree to Amazon’s
              Conditions of Use and Privacy Policy.
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
