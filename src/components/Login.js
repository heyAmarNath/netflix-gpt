import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-home"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <form className="w-3/12 absolute p-6 sm:p-10 bg-black text-white rounded-md bg-opacity-80">
          <h1 className="font-bold text-xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="p-4 my-2 w-full rounded-md bg-[#333]"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-2 w-full rounded-md bg-[#333]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full rounded-md bg-[#333]"
          />
          <button className="p-3 mt-6 bg-[#e50914] rounded-md w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up now." : "Sign In now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
