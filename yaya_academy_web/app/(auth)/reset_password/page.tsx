"use client";
import Image from "next/image";
import { Input, Button, Alert } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { setEmail, selectotp } from "@/lib/redux/Slices/otpSlice";

export default function Page() {
  const [Email, setemail] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    forgotPasswordHandler,
    otp: { isAuthenticated, isLoading, error },
  } = useAuth();

  const handleSend = async (event: any) => {
    forgotPasswordHandler(Email);
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
          <div className="w-full font-Roboto text-center text-base font-light text-textColor">
            Forgot your password? No worries&#33; Just enter your email address
            below&#44; and we&apos;ll send you a link to reset your password.
          </div>
          <div className="w-full">
            <Input
              type="email"
              value={Email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              variant="filled"
              className="w-full h-10 bg-white text-textColor  placeholder:text-textColor "
              prefix={
                <Icon
                  icon="material-symbols-light:mail-outline"
                  className="text-xl font-bold "
                />
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            {error && (
              <Alert
                message="Invalid Email or Email not found"
                type="error"
                showIcon
                closable
              />
            )}
            <button
              onClick={handleSend}
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
                "Send"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
