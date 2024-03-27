"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input, Form, Alert } from "antd";
import { Icon } from "@iconify/react";
import { useAuth } from "@/lib/hooks/useAuth";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="hidden !h-0 lg:flex flex-col justify-between lg:!h-full">
      <div>
        <div className="grid grid-flow-row flex-col gap-5 my-10 mx-10">
          <div className="flex w-full justify-center h-[320px]">
            <Image
              src="onlineLearning.svg"
              alt="onboarding1"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-primaryColor text-center text-2xl">
            Welcome to YAYA Academy Begin Your Journey
          </h1>
          <p className="text-textColor text-center text-base">
            Learn the skills you need to build your dream home or start a career
            in construction.
          </p>
        </div>
      </div>
    </div>
  );
};

const Signup = () => {
  const [visibilitypassword, setVisibilitypassword] = useState(false);
  const [visibilityconfirmpassword, setVisibilityconfirmpassword] =
    useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const {
    signupHandler,
    auth: { isAuthenticated, isLoading, error },
  } = useAuth();

  const handleCConfirmPasswordChange = (e: any) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);

    if (password === confirmPassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
  };

  const handleSignup = async () => {
    try {
      const data = {
        email,
        password,
        fullname: FullName,
      };
      signupHandler(data);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return (
    <div className="lg:grid grid-cols-1 lg:grid-cols-2 justify-between lg:px-20 bg-bodyBg h-screen">
      <div className="lg:h-auto lg:flex flex-col justify-between py-5 px-5 lg:px-0 lg:py-10">
        <div className="text-primaryColor font-bold">YAYA ACADEMY</div>
        <Slider />
      </div>
      <div className="mt-10 lg:mt-0 text-textColor flex flex-col items-center justify-start lg:justify-center w-full">
        <div className="justify-center w-[70%]">
          <h1 className="text-primaryColor font-medium text-2xl">
            Get Started Now
          </h1>
          <div className="grid gap-6 mt-6">
            <Input
              type="text"
              placeholder="Full Name"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="filled"
              className="h-10 bg-white text-textColor placeholder:text-textColor"
              prefix={
                <Icon
                  icon="carbon:user-avatar-filled"
                  className="text-xl font-bold "
                />
              }
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              className="w-full h-10 bg-white text-textColor placeholder:text-textColor"
              prefix={
                <Icon
                  icon="material-symbols-light:mail-outline"
                  className="text-xl font-bold "
                />
              }
            />
            <div className="flex flex-col gap-1">
              <Input
                type={visibilitypassword ? "text" : "password"}
                placeholder="Password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full h-10 bg-white text-textColor placeholder:text-textColor`}
                prefix={<Icon icon="material-symbols:lock-outline" />}
                suffix={
                  visibilitypassword ? (
                    <Icon
                      onClick={() => setVisibilitypassword((prev) => !prev)}
                      icon="mdi:eye-outline"
                    />
                  ) : (
                    <Icon
                      onClick={() => setVisibilitypassword((prev) => !prev)}
                      icon="mdi:hide-outline"
                    />
                  )
                }
              />
            </div>
            <Input
              type={visibilityconfirmpassword ? "text" : "password"}
              placeholder="Confirm Password"
              variant="filled"
              value={confirmPassword}
              onChange={handleCConfirmPasswordChange}
              className={`w-full h-10 bg-white text-textColor placeholder:text-textColor`}
              prefix={<Icon icon="material-symbols:lock-outline" />}
              suffix={
                visibilityconfirmpassword ? (
                  <Icon
                    onClick={() =>
                      setVisibilityconfirmpassword((prev) => !prev)
                    }
                    icon="mdi:eye-outline"
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      setVisibilityconfirmpassword((prev) => !prev)
                    }
                    icon="mdi:hide-outline"
                  />
                )
              }
            />

            <button
              onClick={handleSignup}
              className="bg-primaryColor text-white w-full py-2 rounded-md items-center text-center"
            >
              {isLoading ? (
                <svg
                  width="24"
                  height="24"
                  className="spinner mx-auto"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                    stroke="white"
                  />
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="flex w-full justify-center text-textColor gap-2">
              <span>Already have an account?</span>
              <Link href="/signIn" className="text-primaryColor">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
