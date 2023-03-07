import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../Common/Icon/EmailIcon";
import PasswordShowIcon from "../../Common/Icon/PasswordShowIcon";
import Input from "../../Common/Input";

const Register = () => {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[calc(100vh-180px)]">
      <div className="bg-mainOffPrimary max-w-xs m-auto px-8 py-12 rounded-lg shadow-sm">
        <div class=" text-center">
          <h1 class="text-2xl font-bold sm:text-3xl text-textPrimary">
            Sign up
          </h1>

          {/* <p class="mt-4 text-textSecondary">
            Destination for your reading & learning.
          </p> */}
        </div>

        <form action="" class="mx-auto mt-12 mb-0 space-y-5">
          {/* <Input
            type="text"
            placeholder="e.g. xyz123"
            name="username"
            label={"username"}
            icon={<UserIcon />}
          /> */}

          <Input
            type="email"
            placeholder="e.g. xyz@gmail.com"
            name="email"
            label={"Email"}
            icon={<EmailIcon />}
          />

          <Input
            type="password"
            placeholder="e.g. ....."
            name="password"
            label={"Password"}
            icon={<PasswordShowIcon />}
          />
          <Input
            type="password"
            placeholder="e.g. ....."
            name="password"
            label={"Confirm password"}
            icon={<PasswordShowIcon />}
          />

          <div>
            <button
              type="button"
              className="w-full font-bold uppercase tracking-wide px-6 py-3 text-sm rounded focus:ring-1 hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Sign up
            </button>
            <p class="text-sm text-textSecondary  mt-1">
              Already have an account?
              <Link class="underline ml-1 text-violet-400" to="/register">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
