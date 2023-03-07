import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../Common/Icon/EmailIcon";
import PasswordShowIcon from "../../Common/Icon/PasswordShowIcon";
import Input from "../../Common/Input";

const Login = () => {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[calc(100vh-180px)]">
      <div className="bg-mainOffPrimary max-w-xs m-auto px-8 py-12 rounded-lg shadow-sm">
        <div class=" text-center">
          <h1 class="text-2xl font-bold sm:text-3xl text-textPrimary">
            Sign in
          </h1>

          {/* <p class="mt-4 text-textSecondary">
            Destination for your reading & learning.
          </p> */}
        </div>

        <form action="" class="mx-auto mt-12 mb-0 space-y-4">
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
          <div>
            <button
              type="button"
              className="w-full font-bold uppercase tracking-wide px-6 py-3 text-sm rounded focus:ring-1 hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Sign in
            </button>
            <p class="text-sm text-textSecondary  mt-1">
              Don't have an account yet?
              <Link class="underline ml-1 text-violet-400" to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
