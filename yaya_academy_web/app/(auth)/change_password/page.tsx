"use client";
import Image from "next/image";
import { useState } from "react";
import { Input, Button } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/lib/hooks/useAuth";
import { selectotp } from "@/lib/redux/Slices/otpSlice";

export default function Page() {
  const [visibility, setVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const {
    resetPasswordHandler,
    otp: { isAuthenticated, isLoading, error },
  } = useAuth();

  const otp = useSelector(selectotp);

  const handleReset = async () => {
    try {
      resetPasswordHandler(password);
    } catch (err: any) {
      console.log(err?.message);
    }
  };
  return (
    <div className="flex flex-col lg:px-20 bg-bodyBg h-screen">
      <div className="lg:h-auto lg:flex flex-col justify-between py-5 px-5 lg:px-0 lg:py-10 ">
        <div className="text-primaryColor font-bold">YAYA ACADEMY</div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="max-w-lg  max-h-96 flex flex-col items-center justify-center gap-7 px-20 py-5  ">
          <div className="w-full font-Roboto text-center text-3xl text-primaryColor">
            Reset Your Password
          </div>
          <div className="w-full font-Roboto text-center text-base text-textColor">
            To complete the password reset process&#44; please enter your new
            password below
          </div>
          <div className="w-full flex flex-col gap-5">
            <Input
              type={visibility ? "text" : "password"}
              placeholder="Password"
              variant="filled"
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
            <Input
              type={visibility ? "text" : "password"}
              placeholder="Confirm New Password"
              variant="filled"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
          <div className="w-full">
            <button
              onClick={handleReset}
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
                "Reset Password"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
