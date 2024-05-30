"use client";
import { useState } from "react";
import Image from "next/image";
import { Input, Alert } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "@/lib/types";
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
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const {
    loginHandler,
    auth: { isAuthenticated, isLoading, error },
  } = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const data: LoginCredentials = { email, password };
    const response = await loginHandler(data);
    if ("data" in response && response.data.success === true) {
      router.push("/home");
    } else {
      setLoading(false);
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
            Sign In To Continue
          </h1>
          <div className="grid gap-5 mt-6">
            <Input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 bg-white text-textColor placeholder:text-textColor"
              prefix={
                <Icon
                  icon="material-symbols-light:mail-outline"
                  className="text-xl font-bold "
                />
              }
            />
            <Input
              type={visibility ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-10 bg-white text-textColor placeholder:text-textColor`}
              prefix={<Icon icon="material-symbols:lock-outline" />}
              suffix={
                visibility ? (
                  <Icon
                    onClick={() => setVisibility((prev) => !prev)}
                    icon="mdi:eye-outline"
                  />
                ) : (
                  <Icon
                    onClick={() => setVisibility((prev) => !prev)}
                    icon="mdi:hide-outline"
                  />
                )
              }
            />

            <Link href="/reset_password" className="items-end justify-end flex">
              Forgot Password?
            </Link>
            {error && (
              <Alert
                message="Login failed. Invalid Email or Password"
                type="error"
                showIcon
                closable
              />
            )}
            <button
              onClick={handleLogin}
              className="bg-primaryColor text-white w-full py-2 rounded-md items-center text-center"
            >
              {loading ? (
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
                "Sign In"
              )}
            </button>
            <p className="flex w-full justify-center text-textColor gap-2">
              <span>You don&apos;t have an account yet?</span>
              <Link href="/signUp" className="text-primaryColor">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
